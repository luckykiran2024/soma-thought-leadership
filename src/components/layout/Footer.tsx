import React from 'react';
import Link from 'next/link';
import { Mail, Phone, ArrowUpRight, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-navy-800/80">
          {/* Main thesis & identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl text-white font-medium tracking-tight block">
                Soma Kiran Gonella
              </span>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-mono">
                Decisions · Organizations · Intelligence
              </p>
            </div>
            
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Companies have systems to remember money, customers, employees, projects, and transactions, but very few systems designed to preserve the reasoning behind important decisions.
            </p>

            <div className="pt-2 text-xs text-slate-400 font-serif italic">
              "Organizations accumulate decisions every day. The question is whether they accumulate intelligence with them."
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/thinking" className="hover:text-white transition-colors">
                  Thinking & Frameworks
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-white transition-colors">
                  The Other Book
                </Link>
              </li>
              <li>
                <Link href="/sigmago" className="hover:text-white transition-colors flex items-center">
                  <span>SigmaGo Platform</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 text-blue-400" />
                </Link>
              </li>
              <li>
                <Link href="/writing" className="hover:text-white transition-colors">
                  Writing & Research
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-white transition-colors">
                  Experience & Observations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Soma
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Collaboration */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold block">
              Direct Contact
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="mailto:soma.kiran20@gmail.com"
                  className="flex items-center text-slate-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 mr-2 text-slate-400 group-hover:text-blue-400" />
                  <span>soma.kiran20@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919381548500"
                  className="flex items-center text-slate-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 mr-2 text-slate-400 group-hover:text-emerald-400" />
                  <span>+91 93815 48500</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/soma-kiran-gonella-a9160626/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-300 hover:text-white transition-colors group"
                >
                  <Linkedin className="w-3.5 h-3.5 mr-2 text-slate-400 group-hover:text-[#0A66C2]" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/book-a-conversation"
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shadow-sm"
                >
                  <span>Book a Conversation</span>
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Soma Kiran Gonella. All intellectual property and rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Contact
            </Link>
            <Link href="/book-a-conversation" className="hover:text-slate-400 transition-colors">
              Schedule Discussion
            </Link>
            <span className="text-slate-600">·</span>
            <span>Hyderabad, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
