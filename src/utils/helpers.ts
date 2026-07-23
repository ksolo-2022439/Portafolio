/**
 * Scrolls smoothly to a section by its ID.
 */
export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Generates a className string from conditional classes.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formats a phone number for display.
 */
export function formatPhone(phone: string): string {
  return phone.replace(/(\+\d{3})(\d{4})(\d{4})/, '$1 $2 $3');
}

/**
 * Resolves static asset URLs using Vite BASE_URL for subpath deployments like GitHub Pages.
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
}
