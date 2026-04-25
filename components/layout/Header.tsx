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
    <header id="site-header" className="relative z-20 mx-auto mb-8 h-[165px] w-full max-w-[1440px]">
      <div id="header-frame" className="header-frame flex h-[165px] w-full flex-col justify-between">
        <div id="header-main-row" className="mx-auto h-[108px] w-full bg-white pb-2 pl-9 pr-9 pt-4">
          <div id="header-primary-content" className="mx-auto flex h-[84px] w-full max-w-[1368px] items-center justify-between gap-6">
            <Link
              id="brand-block"
              href={`/${locale}`}
              className="block h-[84px] w-[248px] shrink-0 text-center text-black/90"
            >
              <span className="block text-[30px] font-[600] leading-[140%] tracking-[0.02em]">Nerina Berthelot</span>
              <span className="block text-[30px] font-[400] leading-[140%] tracking-[0.02em]">{labels.role}</span>
            </Link>
            <nav id="header-nav-buttons" className="flex h-[57px] w-full max-w-[800px] items-center justify-between text-sm max-[500px]:hidden">
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
            className="flex h-[37px] w-[158px] items-center justify-center gap-[8px] !pl-9 !pr-9 text-xs uppercase tracking-[0.15em] text-black/80"
          >
            <span className="sr-only">{labels.localeLabel}</span>
            <Link className="teal-chip" href="/en">
              EN
            </Link>
            <Link className="teal-chip" href="/es">
              ES
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
