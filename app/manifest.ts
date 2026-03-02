import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dominant Law',
    short_name: 'DominantLaw',
    description: 'Georgia plaintiff personal injury law firm website.',
    start_url: '/',
    display: 'standalone',
    background_color: '#11151e',
    theme_color: '#d6b154'
  };
}
