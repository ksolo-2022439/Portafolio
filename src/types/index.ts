// ─── Project Types ───────────────────────────────────────────────

export interface ProjectLink {
  label: string;
  url: string;
}

export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  date: string;
  status: 'Finalizado' | 'En progreso';
  technologies: string[];
  learnings: string[];
  problemSolved: string;
  githubUrls: ProjectLink[];
  gallery: GalleryItem[];
  features: string[];
  architecture?: string;
  apis?: string[];
  coverImage: string;
}

// ─── Skill Types ─────────────────────────────────────────────────

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  level: number;
  skills: Skill[];
}

// ─── Soft Skill Types ────────────────────────────────────────────

export interface SoftSkill {
  name: string;
  icon: string;
}

// ─── Language Types ──────────────────────────────────────────────

export interface Language {
  name: string;
  level: string;
  flag: string;
}

// ─── Certification Types ─────────────────────────────────────────

export interface Certification {
  title: string;
  issuer: string;
  credentialUrl: string;
  date?: string;
  badge?: string;
}

// ─── Contact Types ───────────────────────────────────────────────

export interface ContactInfo {
  type: 'email' | 'phone' | 'location';
  label: string;
  value: string;
  href?: string;
  icon: string;
}

// ─── Social Link Types ──────────────────────────────────────────

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// ─── Personal Info ───────────────────────────────────────────────

export interface PersonalInfo {
  fullName: string;
  role: string;
  heroDescription: string;
  aboutDescription: string;
  footerQuote: string;
  contactInfo: ContactInfo[];
  socialLinks: SocialLink[];
}

// ─── Education Types ─────────────────────────────────────────────

export interface Education {
  institution: string;
  career: string;
  startYear: number;
  endYear: number | 'Actualidad';
  description: string;
  projects: string[];
}

// ─── Navigation Types ────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}
