import { GithubIcon, LinkedinIcon } from '../icons/SocialIcons';
import { personalInfo } from '../../data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = personalInfo.socialLinks;

  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <GithubIcon size={18} />,
    LinkedIn: <LinkedinIcon size={18} />,
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Quote */}
          <p className="text-gray-400 text-sm italic text-center max-w-md">
            &ldquo;{personalInfo.footerQuote}&rdquo;
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-sky-600 hover:bg-sky-50 transition-all duration-200"
                aria-label={link.name}
              >
                {socialIcons[link.name]}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} {personalInfo.fullName}
          </p>
        </div>
      </div>
    </footer>
  );
}
