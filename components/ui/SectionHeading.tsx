type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function SectionHeading({eyebrow, title, subtitle, titleClassName, subtitleClassName}: SectionHeadingProps) {
  return (
    <div className="enter-fade space-y-3">
      {eyebrow ? <p className="text-sm uppercase tracking-[0.2em] text-black/60">{eyebrow}</p> : null}
      <h1 className={titleClassName ?? 'text-5xl font-semibold leading-tight sm:text-6xl'}>{title}</h1>
      {subtitle ? <p className={subtitleClassName ?? 'max-w-4xl text-3xl italic text-black/80 sm:text-4xl'}>{subtitle}</p> : null}
    </div>
  );
}
