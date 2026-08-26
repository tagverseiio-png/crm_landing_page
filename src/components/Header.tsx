"use client";

import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-xl bg-apple-accent text-white flex items-center justify-center font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
                    V
                </div>
                <span className="font-semibold text-lg tracking-tight text-apple-text">Velora</span>
            </a>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-apple-textMuted">
                <a href="#pipeline" className="hover:text-apple-accent transition-colors">Pipeline</a>
                <a href="#workspace" className="hover:text-apple-accent transition-colors">Workspace Module</a>
                <a href="#view360" className="hover:text-apple-accent transition-colors">360° CRM</a>
                <a href="#security" className="hover:text-apple-accent transition-colors">Security</a>
                <a href="#pricing" className="hover:text-apple-accent transition-colors">Pricing</a>
                <a href="#faq" className="hover:text-apple-accent transition-colors">FAQ</a>
            </nav>

            <div className="hidden sm:flex items-center space-x-4">
                <button 
                    onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                    className="text-sm font-medium bg-apple-accent hover:bg-apple-accentHover text-white px-5 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02]"
                >
                    Contact Us
                </button>
            </div>

            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="md:hidden p-2 text-apple-text hover:text-apple-accent"
            >
                <Menu className="w-6 h-6" />
            </button>
        </div>

        {isMobileMenuOpen && (
            <div className="md:hidden glass-nav border-b border-black/10 px-6 py-6 space-y-4">
                <a href="#pipeline" className="block text-base font-medium text-apple-text hover:text-apple-accent" onClick={() => setIsMobileMenuOpen(false)}>Pipeline</a>
                <a href="#workspace" className="block text-base font-medium text-apple-text hover:text-apple-accent" onClick={() => setIsMobileMenuOpen(false)}>Workspace Module</a>
                <a href="#view360" className="block text-base font-medium text-apple-text hover:text-apple-accent" onClick={() => setIsMobileMenuOpen(false)}>360° View</a>
                <a href="#security" className="block text-base font-medium text-apple-text hover:text-apple-accent" onClick={() => setIsMobileMenuOpen(false)}>Security</a>
                <a href="#pricing" className="block text-base font-medium text-apple-text hover:text-apple-accent" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                <a href="#faq" className="block text-base font-medium text-apple-text hover:text-apple-accent" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
                <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
                    <button 
                        onClick={() => {
                            window.dispatchEvent(new Event('open-free-trial'));
                            setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-center py-2.5 font-medium bg-apple-accent text-white rounded-full"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        )}
    </header>
  );
}
