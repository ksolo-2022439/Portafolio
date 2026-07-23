import { Rocket } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-gray-50/80 border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading title="Experiencia" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-br from-sky-50 to-white rounded-2xl border border-sky-100 p-8 md:p-12 text-center">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center mx-auto mb-6">
                <Rocket size={28} className="text-sky-500" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                En búsqueda de mi primera oportunidad
              </h3>

              <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
                Actualmente buscando mi primera oportunidad profesional para aportar
                conocimientos y continuar creciendo como desarrollador.
              </p>

              {/* Decorative dots */}
              <div className="absolute top-4 right-4 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
