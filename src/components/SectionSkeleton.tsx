import React from 'react';

export default function SectionSkeleton() {
  return (
    <section className="py-24 sm:py-36 px-6 max-w-[1400px] mx-auto w-full animate-pulse">
      <div className="flex flex-col items-center justify-center space-y-6 max-w-3xl mx-auto">
        <div className="h-6 bg-slate-200/60 rounded-full w-48"></div>
        <div className="h-12 sm:h-16 bg-slate-200/60 rounded-3xl w-full max-w-xl"></div>
        <div className="h-4 bg-slate-200/60 rounded-full w-full max-w-2xl mt-4"></div>
        <div className="h-4 bg-slate-200/60 rounded-full w-3/4 max-w-lg"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-slate-100/50 rounded-3xl p-8 h-80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-200/80 rounded-xl"></div>
              <div className="h-6 bg-slate-200/80 rounded-full w-3/4"></div>
              <div className="space-y-2 mt-4">
                <div className="h-4 bg-slate-200/60 rounded-full w-full"></div>
                <div className="h-4 bg-slate-200/60 rounded-full w-full"></div>
                <div className="h-4 bg-slate-200/60 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
