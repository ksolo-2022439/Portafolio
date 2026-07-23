import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Eye } from 'lucide-react';
import type { Variants } from 'framer-motion';
import Button from '../ui/Button';
import CvModal from '../ui/CvModal';
import { personalInfo } from '../../data/personal';
import { scrollToSection } from '../../utils/helpers';

export default function Hero() {
  const { fullName, role, heroDescription } = personalInfo;
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <>
      <section
        id="inicio"
        className="min-h-screen flex items-center pt-16"
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-medium mb-6 border border-sky-100">
                  Disponible para trabajar
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-4"
              >
                {fullName}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-sky-600 font-medium mb-6"
              >
                {role}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg"
              >
                {heroDescription}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                <Button
                  variant="primary"
                  onClick={() => setIsCvModalOpen(true)}
                  icon={<Eye size={16} />}
                >
                  Ver CV
                </Button>
                <Button
                  variant="secondary"
                  href="/Kenneth_Solorzano_CV.pdf"
                  download="Kenneth_Solorzano_CV.pdf"
                  icon={<Download size={16} />}
                >
                  Descargar CV
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection('proyectos')}
                  icon={<ArrowRight size={16} />}
                >
                  Ver proyectos
                </Button>
              </motion.div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-[22rem] lg:w-96 lg:h-[26rem] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">
                  <img
                    src="/assets/images/hero-photo.jpg"
                    alt={`Fotografía de ${fullName}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-sky-100 rounded-2xl -z-10" />
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-sky-50 rounded-xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CV Viewer Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </>
  );
}
