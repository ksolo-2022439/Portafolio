import type { PersonalInfo, NavItem } from '../types';

export const personalInfo: PersonalInfo = {
  fullName: 'Kenneth Franklin Solórzano Canás',
  role: 'Desarrollador Backend',
  heroDescription: 'Desarrollador backend orientado a la resolución de problemas, con sólidas aptitudes en diseño de bases de datos SQL, arquitectura de software en Java y capacidad de aprendizaje continuo.',
  aboutDescription: 'Soy Kenneth Solórzano, estudiante de Informática de 18 años enfocado en el desarrollo backend con Java y bases de datos SQL, orientado a construir arquitecturas eficientes y estructuradas mientras combino mi pasión por la lógica de programación con el gusto por la tecnología y los videojuegos.',
  footerQuote: 'Intentarlo no garantiza el éxito, pero no hacerlo te asegurará el fracaso.',
  contactInfo: [
    {
      type: 'email',
      label: 'Correo electrónico',
      value: 'ksolorzanoc1@gmail.com',
      href: 'mailto:ksolorzanoc1@gmail.com',
      icon: 'Mail',
    },
    {
      type: 'phone',
      label: 'Teléfono',
      value: '+502 59835889',
      href: 'tel:+50259835889',
      icon: 'Phone',
    },
    {
      type: 'location',
      label: 'Ubicación',
      value: 'Villa Nueva, Guatemala',
      icon: 'MapPin',
    },
  ],
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/ksolo-2022439',
      icon: 'Github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ksolorzanoc1/',
      icon: 'Linkedin',
    },
  ],
};

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Certificaciones', href: '#certificaciones' },
  { label: 'Contacto', href: '#contacto' },
];
