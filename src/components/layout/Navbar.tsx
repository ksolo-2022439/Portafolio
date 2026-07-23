import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navItems } from '../../data/personal';
import { cn, scrollToSection } from '../../utils/helpers';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 20;

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    scrollToSection(id);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-black/10',
        isScrolled
          ? 'bg-white/60 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
          : 'bg-white/30 backdrop-blur-lg'
      )}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#inicio');
          }}
          className="text-lg font-bold text-gray-900 tracking-tight hover:text-sky-600 transition-colors"
        >
          KS<span className="text-sky-500">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-4 py-2 text-sm text-gray-600 hover:text-sky-600 rounded-lg hover:bg-sky-50/50 transition-all duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-sky-600 transition-colors"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="block px-4 py-3 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-all text-sm"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
