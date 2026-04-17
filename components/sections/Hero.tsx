import Link from 'next/link';

type HeroProps = {
  locale: string;
  title: string;
  role: string;
  description: string;
  cta: string;
};

export function Hero({locale, title, role, description, cta}: HeroProps) {
  return (
    <section className="enter-fade grid min-h-[52vh] place-items-center py-6">
      <div className="panel w-full max-w-2xl text-center">
        <h1 className="text-5xl font-semibold tracking-wide sm:text-6xl">{title}</h1>
        <p className="mt-4 text-5xl tracking-wide text-black/90 sm:text-6xl">{role}</p>
        <p className="mx-auto mt-6 max-w-xl text-lg text-black/75">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link className="teal-chip" href="/en">
            EN
          </Link>
          <Link className="teal-chip" href="/es">
            ES
          </Link>
        </div>
        <div className="mt-8">
          <Link className="teal-button" href={`/${locale}/work`}>
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
