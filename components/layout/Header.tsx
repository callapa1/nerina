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
    <header id="site-header" className="mb-8 bg-white">
      <div className="header-frame w-full">
        <div id="header-main-row" className="flex h-[108px] items-start justify-between gap-6 border-b border-black/30 pb-2 pl-9 pr-9 pt-4">
          <div id="brand-block" className="h-[84px] shrink-0 max-[500px]:w-[248px]">
            <Link href={`/${locale}`} className="text-4xl font-semibold tracking-[0.02em] sm:text-5xl">
              Nerina Berthelot
            </Link>
            <p className="mt-1 text-3xl tracking-[0.02em] text-black/85 sm:text-[56px] sm:leading-[1.1]">{labels.role}</p>
          </div>
          <nav id="header-nav-buttons" className="flex h-[57px] flex-1 items-center justify-between text-sm max-[500px]:hidden">
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

        <div id="header-locale-row" className="mt-4 border-t border-black/25 pt-3">
          <div id="header-locale-switch" className="locale-switch ml-auto text-xs uppercase tracking-[0.15em] text-black/80">
            <span className="sr-only">{labels.localeLabel}</span>
            <Link className="teal-chip" href="/en/work">
              EN
            </Link>
            <Link className="teal-chip" href="/es/work">
              ES
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
