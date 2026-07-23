import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

interface VideoModalProps {
  video: { src: string; alt: string } | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (video) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Reproductor de video"
      >
        <div
          className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header bar */}
          <div className="w-full flex items-center justify-between text-white/90 mb-3 px-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Maximize2 size={16} className="text-sky-400" />
              <span>{video.alt}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              aria-label="Cerrar video"
              type="button"
            >
              <X size={20} />
            </button>
          </div>

          {/* Video Container centered & handling all orientations */}
          <div className="relative w-full flex items-center justify-center max-h-[80vh] overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl">
            <video
              controls
              autoPlay
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl"
              preload="metadata"
            >
              <source src={video.src} type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
