import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import { personalInfo } from '../../data/personal';

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-gray-50/80 border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading title="Sobre mí" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12">
              <p className="text-gray-600 text-lg leading-relaxed">
                {personalInfo.aboutDescription}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
