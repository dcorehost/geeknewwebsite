import React from "react";

export default function TabletBanner({
  title = "Expert Tablet Repair & Service",
  subtitle = "Fast, reliable repairs for iPad, Samsung Galaxy Tab, Lenovo and more.",
  ctaPrimary = "Book a Repair",
  ctaSecondary = "Get a Quote",
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#062b7e] via-[#02c9b7] to-[#02c9b7] text-white">
      <div className="absolute -right-32 -top-20 w-72 h-72 rounded-full opacity-20 bg-white blur-3xl pointer-events-none"></div>
      <div className="absolute -left-28 -bottom-28 w-80 h-80 rounded-full opacity-10 bg-white blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Certified technicians • Genuine parts
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              {title}
            </h1>

            <p className="text-slate-100 max-w-xl text-sm sm:text-base">
              {subtitle} Repair pickup, on-site service and fast turnaround with warranty on all replacements.
            </p>

            <div className="flex flex-wrap gap-3 items-center mt-2">
              <a href="#book" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold rounded-lg px-5 py-3 shadow-lg hover:shadow-xl transition">
                {ctaPrimary}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 1.414L9.414 11H17a1 1 0 110 2H9.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6z" clipRule="evenodd" />
                </svg>
              </a>

              <a href="#quote" className="inline-flex items-center gap-2 border border-white/30 rounded-lg px-4 py-3 hover:bg-white/5 transition">
                {ctaSecondary}
              </a>

              <div className="ml-2 text-sm text-slate-200 hidden sm:inline-flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l3 8 4-16 3 8h4" />
                </svg>
                Free diagnostic • 30 day warranty
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-xs text-slate-200">Repairs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24h</div>
                <div className="text-xs text-slate-200">Avg. turnaround</div>
              </div>
              <div className="text-center hidden sm:block">
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-slate-200">Customer rating</div>
              </div>

              <div className="text-center sm:hidden col-span-3">
                <div className="text-xs text-slate-200">Certified technicians • Genuine parts</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] sm:w-[380px] lg:w-[440px]">
              <img src="../src/assets/images/tablet.webp" alt="Tablet mockup" className="mx-auto drop-shadow-2xl rounded-xl border border-white/10" />

            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none">
        <svg viewBox="0 0 1440 80" className="w-full block" preserveAspectRatio="none">
          <path d="M0,32 C360,96 1080,0 1440,48 L1440,80 L0,80 Z" fill="rgba(255,255,255,0.04)" />
        </svg>
      </div>
    </section>
  );
}