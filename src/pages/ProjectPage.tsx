import { useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  ExternalLink,
  Lightbulb,
  Layers,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Image as ImageIcon,
  Film,
} from 'lucide-react';
import { GithubIcon } from '../components/icons/SocialIcons';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import AnimatedSection from '../components/ui/AnimatedSection';
import Lightbox from '../components/ui/Lightbox';
import VideoModal from '../components/ui/VideoModal';
import { projects } from '../data/projects';
import { getAssetUrl } from '../utils/helpers';

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<{ src: string; alt: string } | null>(null);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Proyecto no encontrado</h1>
          <Button variant="secondary" onClick={() => navigate('/')}>
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const images = project.gallery
    .filter((item) => item.type === 'image')
    .map((item) => ({ ...item, src: getAssetUrl(item.src) }));

  const videos = project.gallery
    .filter((item) => item.type === 'video')
    .map((item) => ({ ...item, src: getAssetUrl(item.src) }));

  const nextImage = useCallback(() => {
    if (images.length === 0) return;
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    if (images.length === 0) return;
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleBackToProjects = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate('/', { state: { scrollTo: 'proyectos' } });
  };

  return (
    <>
      <Helmet>
        <title>{project.name} — Kenneth Solórzano</title>
        <meta name="description" content={project.shortDescription} />
        <meta property="og:title" content={`${project.name} — Kenneth Solórzano`} />
        <meta property="og:description" content={project.shortDescription} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Hero Section */}
        <section className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection>
              {/* Back button */}
              <button
                onClick={handleBackToProjects}
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-sky-600 transition-colors mb-8 cursor-pointer bg-transparent border-none p-0"
                type="button"
              >
                <ArrowLeft size={16} />
                Volver a proyectos
              </button>

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-emerald-500" />
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cover */}
              <div className="rounded-2xl overflow-hidden bg-gray-100 mb-8 shadow-sm border border-gray-100">
                <img
                  src={getAssetUrl(project.coverImage)}
                  alt={project.name}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="eager"
                />
              </div>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection delay={0.1}>
              <div className="mb-12">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </AnimatedSection>

            {/* Technologies */}
            <AnimatedSection delay={0.15}>
              <div className="mb-12">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-4">
                  <Layers size={20} className="text-sky-500" />
                  Tecnologías
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Architecture */}
            {project.architecture && (
              <AnimatedSection delay={0.2}>
                <div className="mb-12">
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-4">
                    <Layers size={20} className="text-sky-500" />
                    Arquitectura
                  </h2>
                  <div className="bg-gray-50/80 rounded-xl p-6 border border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Features */}
            {project.features.length > 0 && (
              <AnimatedSection delay={0.25}>
                <div className="mb-12">
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-4">
                    <Star size={20} className="text-sky-500" />
                    Características principales
                  </h2>
                  <ul className="space-y-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-sky-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )}

            {/* Learnings */}
            {project.learnings.length > 0 && (
              <AnimatedSection delay={0.3}>
                <div className="mb-12">
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-4">
                    <Lightbulb size={20} className="text-sky-500" />
                    Aprendizajes
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.learnings.map((learning) => (
                      <div
                        key={learning}
                        className="flex items-center gap-3 p-4 bg-sky-50/50 rounded-xl border border-sky-100"
                      >
                        <div className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Problem Solved */}
            {project.problemSolved && (
              <AnimatedSection delay={0.32}>
                <div className="mb-12">
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-4">
                    <Lightbulb size={20} className="text-sky-500" />
                    Problema que resuelve
                  </h2>
                  <p className="text-gray-600">{project.problemSolved}</p>
                </div>
              </AnimatedSection>
            )}

            {/* Image Gallery Carousel with Nav Arrows */}
            {images.length > 0 && (
              <AnimatedSection delay={0.35}>
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                      <ImageIcon size={20} className="text-sky-500" />
                      Galería de imágenes
                    </h2>
                    <span className="text-xs text-gray-400 font-medium">
                      {activeImageIndex + 1} de {images.length}
                    </span>
                  </div>

                  {/* Main Slider Display with Arrows */}
                  <div className="relative group rounded-2xl overflow-hidden bg-gray-900 border border-gray-100 shadow-md aspect-video">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeImageIndex}
                        src={images[activeImageIndex].src}
                        alt={images[activeImageIndex].alt}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-contain cursor-pointer"
                        onClick={() => setLightboxIndex(activeImageIndex)}
                      />
                    </AnimatePresence>

                    {/* Arrow Left */}
                    {images.length > 1 && (
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 opacity-90 hover:scale-105 cursor-pointer z-10"
                        aria-label="Imagen anterior"
                        type="button"
                      >
                        <ChevronLeft size={22} />
                      </button>
                    )}

                    {/* Arrow Right */}
                    {images.length > 1 && (
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 opacity-90 hover:scale-105 cursor-pointer z-10"
                        aria-label="Imagen siguiente"
                        type="button"
                      >
                        <ChevronRight size={22} />
                      </button>
                    )}

                    {/* Fullscreen indicator badge */}
                    <button
                      onClick={() => setLightboxIndex(activeImageIndex)}
                      className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/50 hover:bg-black/80 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer z-10"
                      type="button"
                    >
                      <Maximize2 size={12} />
                      <span>Pantalla completa</span>
                    </button>

                    {/* Alt label overlay */}
                    <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md text-white/90 text-xs font-medium max-w-[70%] truncate pointer-events-none">
                      {images[activeImageIndex].alt}
                    </div>
                  </div>

                  {/* Thumbnail Navigation Strip */}
                  {images.length > 1 && (
                    <div className="flex gap-2.5 mt-3 overflow-x-auto pb-2 scrollbar-none">
                      {images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                            i === activeImageIndex
                              ? 'border-sky-500 shadow-sm scale-[1.02]'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                          type="button"
                          aria-label={`Ver captura ${i + 1}`}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            )}

            {/* Videos Showcase Section with Framing & Maximize Modal */}
            {videos.length > 0 && (
              <AnimatedSection delay={0.38}>
                <div className="mb-12">
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-4">
                    <Film size={20} className="text-sky-500" />
                    Demostraciones en Video
                  </h2>
                  <div className="grid gap-6">
                    {videos.map((video, i) => (
                      <div
                        key={i}
                        className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-5 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-800 flex items-center gap-2">
                            <Play size={14} className="text-sky-500" />
                            {video.alt}
                          </span>
                          <button
                            onClick={() => setActiveVideo(video)}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-500 hover:text-white text-xs font-medium transition-colors cursor-pointer"
                            type="button"
                          >
                            <Maximize2 size={12} />
                            Maximizar
                          </button>
                        </div>

                        {/* Video Frame */}
                        <div
                          className="relative rounded-xl overflow-hidden bg-black aspect-video border border-gray-200/50 shadow-inner group/frame cursor-pointer flex items-center justify-center"
                          onClick={() => setActiveVideo(video)}
                        >
                          <video
                            className="w-full h-full object-contain pointer-events-none"
                            preload="metadata"
                          >
                            <source src={video.src} type="video/mp4" />
                          </video>

                          {/* Hover Play Button Overlay */}
                          <div className="absolute inset-0 bg-black/30 group-hover/frame:bg-black/20 flex items-center justify-center transition-all duration-300">
                            <div className="w-14 h-14 rounded-full bg-white/90 group-hover/frame:bg-sky-500 group-hover/frame:scale-110 text-gray-900 group-hover/frame:text-white flex items-center justify-center shadow-lg transition-all duration-300">
                              <Play size={24} className="ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* GitHub Links */}
            {project.githubUrls.length > 0 && (
              <AnimatedSection delay={0.4}>
                <div className="mb-12">
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-4">
                    <GithubIcon size={20} className="text-sky-500" />
                    Repositorios
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.githubUrls.map((link) => (
                      <Button
                        key={link.url}
                        variant="secondary"
                        size="sm"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={<ExternalLink size={14} />}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Back button bottom */}
            <AnimatedSection delay={0.42}>
              <div className="pt-8 border-t border-gray-100">
                <Button
                  variant="ghost"
                  onClick={handleBackToProjects}
                  icon={<ArrowLeft size={16} />}
                >
                  Volver a proyectos
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </motion.div>

      {/* Lightbox for Images */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* Video Modal for Fullscreen Maximize (Handles portrait, landscape, and vertical videos cleanly) */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
