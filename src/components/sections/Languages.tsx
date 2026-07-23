import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { languages } from '../../data/skills';

export default function Languages() {
  return (
    <section className="py-24 bg-white border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading title="Idiomas" />
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6">
          {languages.map((lang, i) => (
            <AnimatedSection key={lang.name} delay={i * 0.1}>
              <Card className="text-center min-w-[180px]" padding="lg">
                <div className="text-4xl mb-3">{lang.flag}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {lang.name}
                </h3>
                <p className="text-sky-600 text-sm font-medium">{lang.level}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
