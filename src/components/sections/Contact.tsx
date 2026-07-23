import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/SocialIcons';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { personalInfo } from '../../data/personal';

const contactIcons: Record<string, React.ReactNode> = {
  Mail: <Mail size={22} />,
  Phone: <Phone size={22} />,
  MapPin: <MapPin size={22} />,
};

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <GithubIcon size={18} />,
  LinkedIn: <LinkedinIcon size={18} />,
};

export default function Contact() {
  const { contactInfo, socialLinks } = personalInfo;

  return (
    <section id="contacto" className="py-24 bg-gray-50/80 border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Contacto"
            subtitle="¿Quieres hablar conmigo? Hazlo por los siguientes medios."
          />
        </AnimatedSection>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {contactInfo.map((info, i) => (
            <AnimatedSection key={info.type} delay={i * 0.1}>
              <Card className="text-center" padding="lg">
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mx-auto mb-4 text-sky-500">
                  {contactIcons[info.icon]}
                </div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  {info.label}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-900 font-medium text-sm hover:text-sky-600 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium text-sm">
                    {info.value}
                  </p>
                )}
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Social Links */}
        <AnimatedSection delay={0.3}>
          <div className="flex justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-100 rounded-xl text-sm text-gray-600 font-medium hover:text-sky-600 hover:border-sky-200 hover:shadow-md transition-all duration-300"
                aria-label={link.name}
              >
                {socialIcons[link.name]}
                {link.name}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
