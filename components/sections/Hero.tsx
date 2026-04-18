import Link from 'next/link';

type HeroProps = {
  title: string;
  role: string;
};

export function Hero({title, role}: HeroProps) {
  return (
    <section id="home-hero" className="enter-fade grid min-h-[68vh] w-full place-items-center py-8">
      <div id="home-hero-content" className="w-full text-center">
        <p className="text-center text-[40px] font-[600] leading-[140%] tracking-[0.02em] text-black/90">
          {title}
          <span className="block font-[400]">{role}</span>
        </p>
        <div id="home-hero-locale-switch" className="locale-switch mx-auto mt-8">
          <Link className="teal-chip" href="/en/work">
            EN
          </Link>
          <Link className="teal-chip" href="/es/work">
            ES
          </Link>
        </div>
      </div>
    </section>
  );
}
