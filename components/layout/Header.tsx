import Link from 'next/link';
import {MobileMenu} from './MobileMenu';

type HeaderProps = {
  locale: string;
  labels: {
    about: string;
    resume: string;
    work: string;
    contact: string;
    menu: string;
    localeLabel: string;
    role: string;
    resumeHref: string;
  };
};

export function Header({locale, labels}: HeaderProps) {
  return (
    <header className="mb-8 border-b border-black/30 pb-4 pt-1">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <Link href={`/${locale}`} className="text-4xl font-semibold tracking-wide sm:text-5xl">
            Nerina Berthelot
          </Link>
          <p className="mt-1 text-3xl tracking-wide text-black/85 sm:text-4xl">{labels.role}</p>
        </div>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          <Link className="teal-button" href={`/${locale}/about`}>
            {labels.about}
          </Link>
          <a className="teal-button" href={labels.resumeHref} target="_blank" rel="noreferrer">
            {labels.resume}
          </a>
          <Link className="teal-button" href={`/${locale}/contact`}>
            {labels.contact}
          </Link>
        </nav>
      </div>

        <div className="mt-4 flex items-center justify-between gap-4 border-t border-black/25 pt-3">
          <div className="locale-switch text-xs uppercase tracking-[0.15em] text-black/80">
            <span className="sr-only">{labels.localeLabel}</span>
            <Link className="teal-chip" href="/en">
              EN
          </Link>
          <Link className="teal-chip" href="/es">
            ES
          </Link>
        </div>

        <MobileMenu locale={locale} labels={labels} />
      </div>
    </header>
  );
}
