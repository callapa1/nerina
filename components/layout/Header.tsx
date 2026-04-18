import Link from 'next/link';

type HeaderProps = {
  locale: string;
  labels: {
    about: string;
    resume: string;
    contact: string;
    localeLabel: string;
    role: string;
    resumeHref: string;
  };
};

export function Header({locale, labels}: HeaderProps) {
  return (
    <header className="mb-8 border border-black/40 bg-[#e7e7e7] px-6 pb-3 pt-4 sm:h-[153px] sm:px-10">
      <div className="flex items-start justify-between gap-6">
        <div className="shrink-0">
          <Link href={`/${locale}`} className="text-4xl font-semibold tracking-[0.02em] sm:text-5xl">
            Nerina Berthelot
          </Link>
          <p className="mt-1 text-3xl tracking-[0.02em] text-black/85 sm:text-[56px] sm:leading-[1.1]">{labels.role}</p>
        </div>
        <nav className="hidden items-center justify-between text-sm sm:flex sm:h-[57px] sm:w-[566px] sm:min-w-[550px]">
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

      <div className="mt-4 border-t border-black/25 pt-3">
        <div className="locale-switch ml-auto text-xs uppercase tracking-[0.15em] text-black/80">
          <span className="sr-only">{labels.localeLabel}</span>
          <Link className="teal-chip" href="/en/work">
            EN
          </Link>
          <Link className="teal-chip" href="/es/work">
            ES
          </Link>
        </div>
      </div>
    </header>
  );
}
