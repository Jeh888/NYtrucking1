import { services } from '@/data/services';
import { locations } from '@/data/locations';

export function generateServiceLocationPairs() {
  const pairs: { service: string; location: string }[] = [];
  
  for (const service of services) {
    for (const location of locations) {
      pairs.push({
        service: service.slug,
        location: location.slug,
      });
    }
  }
  
  return pairs;
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function capitalizeWords(text: string): string {
  return text.replace(/\b\w/g, char => char.toUpperCase());
}

export const SITE_CONFIG = {
  name: 'New York Trucking Accident Attorney',
  phone: '8005551234',
  phoneFormatted: '(800) 555-1234',
  email: 'contact@nytruckingattorney.com',
  address: '123 Legal Plaza, New York, NY 10001',
  tagline: 'Fighting for Truck Accident Victims Across New York',
  description: 'Experienced New York trucking accident attorneys fighting for maximum compensation. Free consultation. No fee unless we win.',
};

export function generateMetadata(title: string, description: string) {
  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      type: 'website',
    },
  };
}
