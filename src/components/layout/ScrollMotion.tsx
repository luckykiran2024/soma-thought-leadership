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
    const sectionBodies = sections.map(section => section.firstElementChild as HTMLElement | null);
    let frame = 0;

    sections.forEach((section, index) => {
      const directions = ['scroll-reveal-rise', 'scroll-reveal-left', 'scroll-reveal-right'];
      section.classList.add('scroll-reveal', directions[index % directions.length]);
      section.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 35}ms`);

      section.querySelectorAll<HTMLElement>('.grid > a, .grid > div').forEach((item, itemIndex) => {
        if (itemIndex < 6) {
          item.classList.add('scroll-stagger-item');
          item.style.setProperty('--stagger-delay', `${120 + itemIndex * 75}ms`);
        }
      });

      sectionBodies[index]?.classList.add('scroll-drift');
    });

    const update = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(1, window.scrollY / maxScroll)})`;
      }
      if (graphic && !reduceMotion.matches) {
        graphic.style.setProperty('--scroll-shift', `${Math.min(130, window.scrollY * 0.2).toFixed(1)}px`);
        graphic.style.setProperty('--scroll-rotate', `${Math.min(7, window.scrollY * 0.008).toFixed(2)}deg`);
        graphic.style.setProperty('--scroll-scale', `${Math.min(1.14, 1 + window.scrollY * 0.00016).toFixed(3)}`);

        sections.forEach((section, index) => {
          const body = sectionBodies[index];
          if (!body) return;
          const rect = section.getBoundingClientRect();
          if (rect.bottom < -window.innerHeight || rect.top > window.innerHeight * 2) return;
          const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          const drift = Math.max(-16, Math.min(16, (0.5 - progress) * 28));
          body.style.setProperty('--section-drift', `${drift.toFixed(1)}px`);
        });
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
      sections.forEach(section => observer?.observe(section));
    } else {
      sections.forEach(section => section.classList.add('scroll-reveal-visible'));
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    update();

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      observer?.disconnect();
      sections.forEach((section, index) => {
        section.classList.remove('scroll-reveal', 'scroll-reveal-rise', 'scroll-reveal-left', 'scroll-reveal-right', 'scroll-reveal-visible');
        section.style.removeProperty('--reveal-delay');
        section.querySelectorAll<HTMLElement>('.scroll-stagger-item').forEach(item => {
          item.classList.remove('scroll-stagger-item');
          item.style.removeProperty('--stagger-delay');
        });
        sectionBodies[index]?.classList.remove('scroll-drift');
        sectionBodies[index]?.style.removeProperty('--section-drift');
      });
    };
  }, [pathname]);

  return <div ref={progressRef} className="site-scroll-progress" aria-hidden="true" />;
}
