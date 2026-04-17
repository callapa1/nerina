type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({eyebrow, title, subtitle}: SectionHeadingProps) {
  return (
    <div className="enter-fade space-y-3">
      {eyebrow ? <p className="text-sm uppercase tracking-[0.2em] text-black/60">{eyebrow}</p> : null}
      <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">{title}</h1>
      {subtitle ? <p className="max-w-4xl text-3xl italic text-black/80 sm:text-4xl">{subtitle}</p> : null}
    </div>
  );
}
