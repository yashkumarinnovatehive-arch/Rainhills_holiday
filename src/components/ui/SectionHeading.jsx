const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold tracking-[0.2em] uppercase mb-3 ${
            light ? 'text-[#e8c96a]' : 'text-[#c9a84c]'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-[#1a3a2e]'
        }`}
      >
        {title}
      </h2>
      {centered && (
        <div
          className={`h-1 w-16 rounded-full mx-auto mb-4 ${
            light
              ? 'bg-gradient-to-r from-[#c9a84c] to-[#e8c96a]'
              : 'bg-gradient-to-r from-[#c9a84c] to-[#e8c96a]'
          }`}
        />
      )}
      {!centered && (
        <div className="h-1 w-16 rounded-full mb-4 bg-gradient-to-r from-[#c9a84c] to-[#e8c96a]" />
      )}
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-[#c5d0cb]' : 'text-[#4a6a5a]'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
