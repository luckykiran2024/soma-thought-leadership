'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollMotion() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const graphic = document.querySelector<HTMLElement>('.scroll-graphic');
    const sections = pathname === '/'
      ? Array.from(document.querySelectorAll<HTMLElement>('main > div > section')).slice(1)
      : [];
    let frame = 0;

    const update = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(1, window.scrollY / maxScroll)})`;
      }
      if (graphic && !reduceMotion.matches) {
        graphic.style.setProperty('--scroll-shift', `${Math.min(90, window.scrollY * 0.14).toFixed(1)}px`);
      }
      frame = 0;
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    let observer: IntersectionObserver | undefined;
    if (!reduceMotion.matches && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('scroll-reveal-visible', entry.isIntersecting);
        });
      }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
      sections.forEach(section => {
        section.classList.add('scroll-reveal');
        observer?.observe(section);
      });
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    update();

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      observer?.disconnect();
      sections.forEach(section => section.classList.remove('scroll-reveal', 'scroll-reveal-visible'));
    };
  }, [pathname]);

  return <div ref={progressRef} className="site-scroll-progress" aria-hidden="true" />;
}
