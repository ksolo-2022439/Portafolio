import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export default function ScrollToTop() {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > 400;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 z-30 w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-500 shadow-sm hover:text-sky-600 hover:border-sky-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          aria-label="Volver arriba"
          type="button"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
