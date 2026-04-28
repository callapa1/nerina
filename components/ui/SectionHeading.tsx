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
      {eyebrow ? <p className="text-[length:var(--fs-xs)] uppercase tracking-[0.2em] text-black/60">{eyebrow}</p> : null}
      <h1 className={titleClassName ?? 'text-[length:var(--fs-page-title)] font-semibold leading-tight'}>{title}</h1>
      {subtitle ? <p className={subtitleClassName ?? 'max-w-4xl text-[length:var(--fs-page-subtitle)] italic text-black/80'}>{subtitle}</p> : null}
    </div>
  );
}
