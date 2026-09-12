"use client";

import { Star, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { useFirebaseData } from '@/lib/useFirebaseData';
import SectionSkeleton from '@/components/SectionSkeleton';

interface Testimonial {
  headline: string;
  body: string;
  name?: string;
  attribution: string;
  stars?: number;
}

interface TestimonialsData {
  header?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
  };
  items?: Testimonial[];
}

export default function TestimonialsSection() {
  const { data: testimonialsData, loading } = useFirebaseData<TestimonialsData | Testimonial[]>('landing/testimonials');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Handle both array format (from seed) and object format (from admin)
  const items: Testimonial[] = Array.isArray(testimonialsData)
    ? testimonialsData
    : (testimonialsData as TestimonialsData)?.items || [];

  const header = !Array.isArray(testimonialsData) && (testimonialsData as TestimonialsData)?.header
    ? (testimonialsData as TestimonialsData).header!
    : {
        eyebrow: 'Testimonials',
        title: 'Loved by teams like yours',
        subtitle: 'Real feedback from real businesses that switched to Flora.'
      };

  const goTo = useCallback((index: number) => {
    if (isTransitioning || items.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [isTransitioning, items.length]);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, goTo]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (items.length <= 1 || isPaused) return;
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [items.length, isPaused, goNext]);

  if (loading) return <SectionSkeleton />;
  if (items.length === 0) return null;

  const current = items[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-36 px-6"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)' }}
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-sm font-semibold tracking-wide uppercase text-apple-accent">
          {header.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apple-text mt-3 mb-5">
          {header.title}
        </h2>
        {header.subtitle && (
          <p className="text-base sm:text-lg text-apple-textMuted">
            {header.subtitle}
          </p>
        )}
      </div>

      {/* Card */}
      <div className="max-w-4xl mx-auto relative">
        <div
          className="relative bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote watermark */}
          <div className="absolute top-6 right-8 text-[120px] sm:text-[160px] font-serif text-slate-100 leading-none select-none pointer-events-none" aria-hidden="true">
            &ldquo;
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 sm:px-14 py-10 sm:py-14">
            {/* Stars */}
            <div className="flex gap-1.5 mb-7">
              {Array.from({ length: current?.stars || 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-amber-400 text-amber-400 drop-shadow-sm"
                />
              ))}
            </div>

            {/* Headline & Body with transition */}
            <div
              className="transition-all duration-300 ease-in-out"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(12px)' : 'translateY(0)',
              }}
            >
              <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-apple-text leading-snug mb-5">
                &ldquo;{current?.headline}&rdquo;
              </h3>

              <p className="text-base sm:text-lg text-apple-textMuted leading-relaxed max-w-3xl">
                {current?.body}
              </p>
            </div>

            {/* Divider + Attribution */}
            <div className="mt-10 pt-7 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div
                className="transition-all duration-300 ease-in-out"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateX(-12px)' : 'translateX(0)',
                }}
              >
                <p className="text-base font-bold text-apple-text">
                  {current?.name || current?.attribution?.split(',')[0]?.trim() || 'Anonymous'}
                </p>
                <p className="text-sm text-apple-textMuted italic mt-0.5">
                  {current?.name
                    ? current.attribution
                    : current?.attribution?.includes(',')
                      ? current.attribution.substring(current.attribution.indexOf(',') + 1).trim()
                      : current?.attribution
                  }
                </p>
              </div>

              <div className="flex items-center gap-1.5 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 w-fit shrink-0">
                <BadgeCheck className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-semibold text-blue-600">Verified Customer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        {items.length > 1 && (
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Prev Arrow */}
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-apple-accent hover:border-apple-accent/30 hover:shadow-md transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-8 h-2.5 bg-apple-accent shadow-sm shadow-apple-accent/30'
                      : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-apple-accent hover:border-apple-accent/30 hover:shadow-md transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Progress bar */}
        {items.length > 1 && !isPaused && (
          <div className="max-w-xs mx-auto mt-4 h-0.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-apple-accent/40 rounded-full"
              style={{
                animation: 'testimonial-progress 5s linear infinite',
              }}
            />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes testimonial-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
