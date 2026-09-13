'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { Camera, ExternalLink } from 'lucide-react';

interface PexelsDestinationImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  slug: string;
  name?: string;
  stateName?: string;
  initialSrc?: string;
  alt?: string;
  showAttribution?: boolean;
}

export function PexelsDestinationImage({
  slug,
  name,
  stateName,
  initialSrc,
  alt,
  showAttribution = false,
  className = '',
  fill = false,
  priority = false,
  sizes,
  ...props
}: PexelsDestinationImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(initialSrc || 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200');
  const [photographerName, setPhotographerName] = useState<string | null>(null);
  const [photographerUrl, setPhotographerUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function loadPexelsImage() {
      try {
        const queryParams = new URLSearchParams({ slug });
        if (name) queryParams.set('name', name);
        if (stateName) queryParams.set('state', stateName);

        const response = await fetch(`/api/destination-image?${queryParams.toString()}`);
        if (!response.ok) throw new Error('API request failed');

        const json = await response.json();
        if (isMounted && json.success && json.data) {
          setImgSrc(json.data.imageUrl);
          if (json.data.photographerName) setPhotographerName(json.data.photographerName);
          if (json.data.photographerUrl) setPhotographerUrl(json.data.photographerUrl);
        }
      } catch (err) {
        // Fall back gracefully to initialSrc or default
        if (initialSrc) setImgSrc(initialSrc);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadPexelsImage();

    return () => {
      isMounted = false;
    };
  }, [slug, name, stateName, initialSrc]);

  const descriptiveAlt = alt || `${name || slug} destination photograph in ${stateName || 'India'}`;

  return (
    <div className={`relative overflow-hidden ${fill ? 'w-full h-full' : ''}`}>
      {/* Loading Skeleton pulse */}
      {loading && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse z-10" />
      )}

      <Image
        src={imgSrc}
        alt={descriptiveAlt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={`${className} transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onError={() => {
          setImgSrc(initialSrc || 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200');
        }}
        {...props}
      />

      {/* Subtle Photographer Attribution badge if requested */}
      {showAttribution && photographerName && (
        <div className="absolute bottom-2 right-2 z-20 px-2 py-1 rounded bg-royal-950/80 backdrop-blur-md text-[10px] text-slate-300 flex items-center gap-1 border border-white/10">
          <Camera className="w-3 h-3 text-saffron-400" />
          <span>Photo by</span>
          {photographerUrl ? (
            <a
              href={photographerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron-400 hover:underline font-semibold flex items-center gap-0.5"
            >
              {photographerName}
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          ) : (
            <span className="font-semibold text-white">{photographerName}</span>
          )}
          <span>on Pexels</span>
        </div>
      )}
    </div>
  );
}
