import { GithubIcon, LinkedinIcon } from '../icons/SocialIcons';
import { personalInfo } from '../../data/personal';

export default function SocialSidebar() {
  const socialLinks = personalInfo.socialLinks;

  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <GithubIcon size={18} />,
    LinkedIn: <LinkedinIcon size={18} />,
  };

  return (
    <div
      className="fixed bottom-8 left-6 z-30 hidden md:flex flex-col gap-2"
      aria-label="Redes sociales"
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-500 shadow-sm hover:text-sky-600 hover:border-sky-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          aria-label={link.name}
        >
          {socialIcons[link.name]}
        </a>
      ))}
      {/* Decorative line */}
      <div className="w-px h-16 bg-gray-200 mx-auto mt-2" />
    </div>
  );
}
