import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 — Página no encontrada</title>
        <meta name="description" content="La página que buscas no existe." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="text-center max-w-md">
          {/* 404 Number */}
          <div className="text-8xl font-bold text-sky-100 mb-4 select-none">
            404
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Página no encontrada
          </h1>

          <p className="text-gray-500 mb-8 leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>

          <Button
            variant="primary"
            href="/"
            icon={<Home size={16} />}
          >
            Volver al inicio
          </Button>
        </div>
      </motion.div>
    </>
  );
}
