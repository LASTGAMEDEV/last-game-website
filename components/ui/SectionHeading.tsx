interface SectionHeadingProps {
  eyebrow?: string
  title: string
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && (
        <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">{title}</h2>
    </div>
  )
}
