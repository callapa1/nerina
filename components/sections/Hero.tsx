import Link from 'next/link';

type HeroProps = {
  title: string;
  role: string;
};

export function Hero({title, role}: HeroProps) {
  return (
    <section className="enter-fade grid min-h-[68vh] place-items-center py-8">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-5xl font-semibold tracking-wide sm:text-6xl">{title}</h1>
        <p className="mt-4 text-5xl tracking-wide text-black/90 sm:text-6xl">{role}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <Link className="teal-chip" href="/en">
            EN
          </Link>
          <Link className="teal-chip" href="/es">
            ES
          </Link>
        </div>
      </div>
    </section>
  );
}
