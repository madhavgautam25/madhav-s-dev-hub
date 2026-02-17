import { useState } from 'react';
import { Moon, Sun, Menu, X, Terminal } from 'lucide-react';
import { navLinks } from '@/data/portfolio';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  dark: boolean;
  toggle: () => void;
}

export default function Navbar({ dark, toggle }: NavbarProps) {
  const active = useScrollSpy();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="glass rounded-lg px-6 py-3 flex items-center justify-between border-glow">
        <a href="#hero" onClick={() => scrollTo('#hero')} className="flex items-center gap-2 text-lg font-bold font-mono">
          <Terminal size={18} className="text-primary" />
          <span className="gradient-cyber-text">MG</span>
          <span className="text-primary/40 text-xs font-normal hidden sm:inline">v2.0</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = active === sectionId;
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-1.5 rounded text-sm font-mono transition-all duration-200 ${
                  isActive
                    ? 'text-primary bg-primary/10 border border-primary/20 text-glow'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {isActive && <span className="text-primary/60 mr-1">&gt;</span>}
                {link.label}
              </button>
            );
          })}
          <button
            onClick={toggle}
            className="ml-2 p-2 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggle} className="p-2 rounded hover:bg-muted transition-colors text-muted-foreground" aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded hover:bg-muted transition-colors text-muted-foreground" aria-label="Menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass rounded-lg mt-2 p-4 md:hidden border-glow"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-3 py-2 rounded text-sm font-mono text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                <span className="text-primary/40 mr-2">&gt;</span>{link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
