import Link from 'next/link';
import {MobileMenu} from './MobileMenu';

type HeaderProps = {
  locale: string;
  labels: {
    home: string;
    about: string;
    work: string;
    contact: string;
    menu: string;
    localeLabel: string;
  };
};

export function Header({locale, labels}: HeaderProps) {
  return (
    <header className="mb-12 border-b border-black/10 pb-6">
      <div className="flex items-center justify-between gap-6">
        <Link href={`/${locale}`} className="text-lg font-semibold tracking-wide">
          Nerina
        </Link>
        <nav className="hidden items-center gap-5 text-sm uppercase tracking-widest md:flex">
          <Link href={`/${locale}`}>{labels.home}</Link>
          <Link href={`/${locale}/about`}>{labels.about}</Link>
          <Link href={`/${locale}/work`}>{labels.work}</Link>
          <Link href={`/${locale}/contact`}>{labels.contact}</Link>
          <span className="text-black/45">|</span>
          <span className="text-black/45">{labels.localeLabel}</span>
          <Link href="/en">EN</Link>
          <Link href="/es">ES</Link>
        </nav>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 md:hidden">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-black/70">
          <span>{labels.localeLabel}</span>
          <Link href="/en">EN</Link>
          <Link href="/es">ES</Link>
        </div>
        <MobileMenu
          locale={locale}
          labels={{
            menu: labels.menu,
            home: labels.home,
            about: labels.about,
            work: labels.work,
            contact: labels.contact
          }}
        />
      </div>
    </header>
  );
}
