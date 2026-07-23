import { Award, ExternalLink } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { certifications } from '../../data/certifications';

export default function Certifications() {
  return (
    <section id="certificaciones" className="py-24 bg-white border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading title="Certificaciones" />
        </AnimatedSection>

        <div className="max-w-lg mx-auto">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.1}>
              <Card padding="lg" className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center mx-auto mb-5">
                  <Award size={28} className="text-sky-500" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h3>

                <p className="text-gray-500 text-sm mb-6">
                  Emitida por <span className="text-gray-700 font-medium">{cert.issuer}</span>
                </p>

                <Button
                  variant="secondary"
                  size="sm"
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ExternalLink size={14} />}
                >
                  Ver credencial
                </Button>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
