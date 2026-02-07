import { Sparkles } from 'lucide-react';

export default function PageHeader({ title, highlight, subtitle }) {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-24 text-center">
        <div className="animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/80 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Gurukul Academy
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white animate-fade-in-up">
          {title} <span className="text-gradient">{highlight}</span>
        </h1>
        {subtitle && (
          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl mx-auto animate-fade-in-up delay-200">
            {subtitle}
          </p>
        )}

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-8 sm:h-12">
            <path d="M0 60L48 52C96 44 192 28 288 22C384 16 480 20 576 28C672 36 768 48 864 50C960 52 1056 44 1152 36C1248 28 1344 20 1392 16L1440 12V60H0Z" fill="white"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
