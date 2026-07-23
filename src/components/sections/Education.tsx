import { GraduationCap, Calendar, FolderOpen, BookOpen } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

export default function Education() {
  return (
    <section id="educacion" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading title="Educación" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl mx-auto">
            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-sky-300 space-y-12">
              {/* Item 1: Perito en Informática */}
              <div className="relative">
                {/* Timeline Node */}
                <div className="absolute left-[-41px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-white ring-2 ring-sky-200" />

                <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-sky-200 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap size={20} className="text-sky-500" />
                    <h3 className="text-lg font-bold text-gray-900">
                      Centro Educativo Técnico Laboral Kinal
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={14} className="text-sky-600 font-medium" />
                    <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                      2024 — 2026
                    </span>
                  </div>

                  <p className="text-gray-900 font-semibold text-base mb-3">
                    Perito con especialidad en Informática
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Formación técnica enfocada en desarrollo backend, arquitectura de software, bases de datos SQL y programación orientada a objetos. Proyectos desarrollados durante esta etapa:
                  </p>

                  <div className="flex items-start gap-2 pt-2 border-t border-gray-200/60">
                    <FolderOpen size={15} className="text-sky-500 mt-1 flex-shrink-0" />
                    <div className="flex flex-wrap gap-2">
                      {['Jalatro', 'KinCaps', 'KinScription', 'BIK'].map((project) => (
                        <span
                          key={project}
                          className="px-3 py-1 bg-white text-sky-600 text-xs font-medium rounded-lg border border-sky-100 shadow-2xs"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2: Ciclo Básico */}
              <div className="relative">
                {/* Timeline Node */}
                <div className="absolute left-[-41px] top-1.5 w-4 h-4 rounded-full bg-sky-300 border-4 border-white ring-2 ring-sky-100" />

                <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-sky-200 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen size={18} className="text-sky-500" />
                    <h3 className="text-lg font-bold text-gray-900">
                      Centro Educativo Técnico Laboral Kinal
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={14} className="text-gray-500 font-medium" />
                    <span className="text-xs font-semibold text-gray-600 bg-gray-200/60 px-2.5 py-0.5 rounded-full">
                      2022 — 2023
                    </span>
                  </div>

                  <p className="text-gray-900 font-semibold text-base mb-2">
                    Ciclo Básico
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Formación académica de educación secundaria con orientación técnica inicial en herramientas informáticas y lógica fundamental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
