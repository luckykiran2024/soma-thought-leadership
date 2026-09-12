'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Calendar, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Thinking', href: '/thinking' },
  { label: 'The Book', href: '/book' },
  { label: 'SigmaGo', href: '/sigmago' },
  { label: 'Writing', href: '/writing' },
  { label: 'Experience', href: '/experience' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-editorial-border/80 py-3 shadow-subtle'
          : 'bg-background/80 backdrop-blur-sm border-b border-editorial-border/40 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <Link href="/" className="group flex items-center">
          <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-ink group-hover:text-accent transition-colors">
            Soma Kiran Gonella
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-medium tracking-tight">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-ink font-semibold'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-ink rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center space-x-3">
          <Link
            href="/sigmago"
            className="hidden md:inline-flex items-center text-xs font-medium text-ink-muted hover:text-ink px-3 py-1.5 rounded-full hover:bg-surface transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-accent" />
            <span>SigmaGo</span>
          </Link>

          <Link
            href="/book-a-conversation"
            className="inline-flex items-center text-xs font-semibold px-4 py-2 rounded-full bg-navy-950 hover:bg-navy-900 text-white transition-all shadow-sm hover:shadow"
          >
            <Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-300" />
            <span>Book a Conversation</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center space-x-2">
          <Link
            href="/book-a-conversation"
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-navy-950 text-white sm:hidden"
          >
            Book Call
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-surface focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-editorial-border px-4 pt-3 pb-6 space-y-2 shadow-elevated animate-fade-in">
          <div className="grid grid-cols-2 gap-1 pb-3 border-b border-editorial-rule">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-navy-950 text-white'
                      : 'text-ink-light hover:bg-surface'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 space-y-2">
            <Link
              href="/book-a-conversation"
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-navy-950 text-white text-xs font-semibold shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-blue-300" />
              <span>Book a Conversation</span>
            </Link>

            <Link
              href="/sigmago"
              className="w-full flex items-center justify-center space-x-1.5 py-2 px-4 rounded-lg border border-editorial-border bg-white text-ink text-xs font-medium"
            >
              <span>Explore SigmaGo Decision Intelligence</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
