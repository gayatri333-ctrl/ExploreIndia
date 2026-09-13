'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
} from 'lucide-react';

interface FestivalGalleryProps {
  images: string[];
  title: string;
}

export function FestivalGallery({ images, title }: FestivalGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isLightboxOpen = lightboxIndex !== null;

  const handleNext = useCallback(() => {
    if (lightboxIndex === null || images.length === 0) return;
    setLightboxIndex((prev) => (prev! + 1) % images.length);
  }, [lightboxIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null || images.length === 0) return;
    setLightboxIndex((prev) => (prev! - 1 + images.length) % images.length);
  }, [lightboxIndex, images.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation listener (Left, Right, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, handleNext, handlePrev, handleClose]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {/* Gallery Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <h3 className="text-xl font-bold font-serif text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-saffron-400" />
          <span>Festival Photo Gallery</span>
        </h3>
        <span className="text-xs font-mono text-slate-400 bg-royal-950 px-2.5 py-1 rounded border border-white/10">
          {images.length} High-Res Shots
        </span>
      </div>

      {/* Responsive Photo Grid (Masonry Featured Layout) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {images.map((url, index) => {
          const isFeatured = index === 0;
          return (
            <button
              key={index}
              onClick={() => setLightboxIndex(index)}
              className={`relative rounded-2xl overflow-hidden group border border-white/10 hover:border-saffron-500/50 shadow-xl transition-all duration-300 ${
                isFeatured ? 'col-span-2 row-span-2 h-64 sm:h-80' : 'h-32 sm:h-36'
              }`}
            >
              <Image
                src={url}
                alt={`${title} photo ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3" />

              {/* Hover Badge Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-royal-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-saffron-500/90 text-royal-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {/* Photo Index Badge */}
              <div className="absolute bottom-2.5 left-2.5 bg-royal-950/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 border border-white/10">
                #{index + 1}
              </div>
            </button>
          );
        })}
      </div>

      {/* Full-Screen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-royal-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-royal-900/80 hover:bg-rose-500/80 text-white border border-white/20 transition shadow-2xl"
            title="Close Lightbox (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-royal-900/80 hover:bg-saffron-500 text-white hover:text-royal-950 border border-white/20 transition shadow-2xl"
            title="Previous Photo (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-royal-900/80 hover:bg-saffron-500 text-white hover:text-royal-950 border border-white/20 transition shadow-2xl"
            title="Next Photo (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] rounded-3xl overflow-hidden border border-saffron-500/40 shadow-2xl flex flex-col bg-royal-900/90"
          >
            <div className="relative w-full h-[65vh] sm:h-[72vh] bg-black">
              <Image
                src={images[lightboxIndex]}
                alt={`${title} Lightbox photo ${lightboxIndex + 1}`}
                fill
                priority
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Caption & Counter Footer */}
            <div className="p-4 sm:p-5 bg-royal-950/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-saffron-400 font-bold tracking-wider">
                  {title} • Visual Celebration
                </span>
                <p className="text-xs text-slate-300 font-serif italic">
                  High-resolution photo snapshot #{lightboxIndex + 1}
                </p>
              </div>

              <div className="text-xs font-mono font-bold text-slate-300 bg-royal-900 px-3 py-1.5 rounded-xl border border-white/10">
                Photo {lightboxIndex + 1} of {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
