'use client';

export default function EventFeedSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="glass-card p-6 rounded-md border border-slate-800 flex flex-col md:flex-row gap-6 items-stretch"
        >
          {/* Tear-off Calendar Skeleton */}
          <div className="w-full md:w-28 h-24 md:h-auto bg-slate-800/80 rounded-none flex-shrink-0" />

          {/* Image Thumbnail Skeleton */}
          <div className="w-full md:w-72 h-48 bg-slate-800/80 rounded-md flex-shrink-0" />

          {/* Details Skeleton */}
          <div className="flex-1 space-y-3 py-1">
            <div className="flex items-center gap-3">
              <div className="w-28 h-6 bg-slate-800/80 rounded-full" />
              <div className="w-36 h-5 bg-slate-800/60 rounded" />
            </div>

            <div className="w-3/4 h-8 bg-slate-800/80 rounded" />

            <div className="space-y-2">
              <div className="w-full h-4 bg-slate-800/60 rounded" />
              <div className="w-5/6 h-4 bg-slate-800/40 rounded" />
            </div>

            <div className="pt-4 border-t border-slate-800/60 flex justify-between items-center">
              <div className="w-40 h-4 bg-slate-800/60 rounded" />
              <div className="w-36 h-9 bg-slate-800/80 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
