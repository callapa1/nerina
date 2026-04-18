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
        <nav className="hidden items-center text-sm sm:relative sm:left-5 sm:top-5 sm:flex sm:h-[57px] sm:w-[566px] sm:min-w-[550px] sm:gap-[124px]">
          <Link className="nav-button" href={`/${locale}/about`}>
            {labels.about}
          </Link>
          <a className="nav-button" href={labels.resumeHref} target="_blank" rel="noreferrer">
            {labels.resume}
          </a>
          <Link className="nav-button" href={`/${locale}/contact`}>
            {labels.contact}
          </Link>
        </nav>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 border-t border-black/25 pt-3">
        <div className="locale-switch text-xs uppercase tracking-[0.15em] text-black/80">
          <span className="sr-only">{labels.localeLabel}</span>
          <Link className="teal-chip" href="/en/work">
            EN
          </Link>
          <Link className="teal-chip" href="/es/work">
            ES
          </Link>
        </div>

        <div className="sm:hidden">
          <MobileMenu locale={locale} labels={labels} />
        </div>
      </div>
    </header>
  );
}
