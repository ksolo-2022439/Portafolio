import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfUrl = '/Kenneth_Solorzano_CV.pdf';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-6"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Vista previa de CV"
      >
        <div
          className="relative max-w-5xl w-full h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/80">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <FileText className="text-sky-500" size={20} />
              <span>Curriculum Vitae — Kenneth Solórzano</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-white hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors"
              >
                <ExternalLink size={14} />
                Abrir en nueva pestaña
              </a>

              <a
                href={pdfUrl}
                download="Kenneth_Solorzano_CV.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors shadow-xs"
              >
                <Download size={14} />
                Descargar
              </a>

              <button
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-200/60 rounded-lg transition-colors cursor-pointer"
                aria-label="Cerrar modal"
                type="button"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* PDF Viewer Frame */}
          <div className="flex-1 bg-gray-100 relative">
            <iframe
              src={pdfUrl}
              title="Curriculum Vitae Kenneth Solórzano"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
