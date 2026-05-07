import Link from 'next/link';

type HeroProps = {
  title: string;
  role: string;
  enHref?: string;
  esHref?: string;
};

export function Hero({title, role, enHref = '/en', esHref = '/es'}: HeroProps) {
  return (
    <section id="home-hero" className="enter-fade grid w-full flex-1 place-items-center">
      <div id="home-hero-content" className="w-full text-center">
        <p className="text-center text-[length:var(--fs-display)] font-[600] leading-[140%] tracking-[0.02em] text-black/90">
          {title}
          <span className="block font-[400]">{role}</span>
        </p>
        <div id="home-hero-locale-switch" className="mx-auto mt-8 flex flex-col items-center gap-3">
          <p className="text-[length:var(--fs-sm)] font-[400] not-italic leading-[140%]">Choose language</p>
          <div id="home-hero-locale-buttons" className="flex items-center gap-2">
            <Link className="teal-chip" href={enHref}>
              EN
            </Link>
            <Link className="teal-chip" href={esHref}>
              ES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
