import Link from 'next/link';
import { Location } from '@/data/locations';

interface LocationCardProps {
  location: Location;
  serviceSlug?: string;
}

export default function LocationCard({ location, serviceSlug }: LocationCardProps) {
  const href = serviceSlug 
    ? `/${serviceSlug}/${location.slug}` 
    : `/locations/${location.slug}`;

  return (
    <Link 
      href={href}
      className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-amber-500 hover:shadow-lg transition group"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition">
            {location.name}
          </h3>
          <p className="text-sm text-slate-500">{location.borough}</p>
        </div>
        <span className="text-amber-600 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}
