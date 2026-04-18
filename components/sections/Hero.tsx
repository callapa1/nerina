import Link from 'next/link';

type HeroProps = {
  title: string;
  role: string;
};

export function Hero({title, role}: HeroProps) {
  return (
    <section className="enter-fade grid min-h-[68vh] w-full place-items-center py-8">
      <div className="w-full text-center">
        <h1 className="text-center text-[40px] font-semibold leading-[140%] tracking-[0.02em]">{title}</h1>
        <p className="mt-2 text-center text-[40px] font-normal leading-[140%] tracking-[0.02em] text-black/90">{role}</p>
        <div className="locale-switch mx-auto mt-8">
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
