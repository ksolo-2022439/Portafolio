interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
}

export default function SectionHeading({ title, subtitle, tag }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      {tag && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-100 rounded-full">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
        {title}
      </h2>
      <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full mx-auto mb-4" />
      {subtitle && (
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
