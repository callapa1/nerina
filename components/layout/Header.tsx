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
    <header id="site-header" className="mb-8 h-[150px] bg-white">
      <div className="header-frame flex h-full w-full flex-col justify-between">
        <div id="header-main-row" className="mx-auto h-[108px] w-full border-b border-black/30 pb-2 pl-9 pr-9 pt-4">
          <div id="header-primary-content" className="mx-auto flex h-[84px] w-[1368px] items-center justify-between gap-6">
            <div id="brand-block" className="h-[84px] w-[248px] shrink-0 text-center">
              <Link href={`/${locale}`} className="text-[30px] font-[600] leading-[140%] tracking-[0.02em] text-black/90">
                Nerina Berthelot
              </Link>
              <p className="text-[30px] font-[400] leading-[140%] tracking-[0.02em] text-black/90">{labels.role}</p>
            </div>
            <nav id="header-nav-buttons" className="flex h-[57px] w-[800px] items-center justify-between text-sm max-[500px]:hidden">
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
        </div>

        <div id="header-locale-row" className="h-[37px]">
          <div
            id="header-locale-switch"
            className="flex h-[37px] w-[150px] items-center justify-center gap-[6px] !pl-9 !pr-9 text-xs uppercase tracking-[0.15em] text-black/80"
          >
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
