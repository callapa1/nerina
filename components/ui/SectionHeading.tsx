type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({eyebrow, title, subtitle}: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-black/60">{eyebrow}</p> : null}
      <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
      {subtitle ? <p className="max-w-2xl text-lg text-black/75">{subtitle}</p> : null}
    </div>
  );
}
