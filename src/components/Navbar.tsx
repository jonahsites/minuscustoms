import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Simulator', href: '#simulator' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
        scrolled ? 'py-4 bg-dark-surface/90 backdrop-blur-md border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-brand-blue flex items-center justify-center font-black text-white italic text-xl transform skew-x-[-12deg]">
            M
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase italic leading-none">
            Minus<span className="text-brand-blue">Customs</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-technical hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-6 bg-white/10" />
          <button className="px-8 py-3 bg-brand-blue text-white font-black text-[10px] tracking-[0.3em] uppercase hover:bg-blue-600 transition-all shadow-lg shadow-brand-blue/20">
            SECURE_QUOTA
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-surface border-t border-white/10 mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-6 p-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl uppercase">
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
