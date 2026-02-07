export default function SectionHeading({ badge, title, highlight, subtitle, light = false }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase rounded-full ${
            light
              ? 'bg-white/10 text-white/80'
              : 'bg-accent/10 text-accent'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className={light ? 'text-gradient' : 'text-gradient'}>{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
