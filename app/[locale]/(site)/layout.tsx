import Link from 'next/link';
import {getTranslations} from 'next-intl/server';

type SiteLayoutProps = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function SiteLayout({children, params}: SiteLayoutProps) {
  const {locale} = await params;
  const t = await getTranslations('Nav');

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 py-8">
      <header className="mb-12 flex flex-wrap items-center justify-between gap-5 border-b border-black/10 pb-5">
        <Link href={`/${locale}`} className="text-lg font-semibold tracking-wide">
          Nerina
        </Link>
        <nav className="flex items-center gap-5 text-sm uppercase tracking-widest">
          <Link href={`/${locale}`}>{t('home')}</Link>
          <Link href={`/${locale}/about`}>{t('about')}</Link>
          <Link href={`/${locale}/work`}>{t('work')}</Link>
          <Link href={`/${locale}/contact`}>{t('contact')}</Link>
          <span className="text-black/45">|</span>
          <Link href="/en">EN</Link>
          <Link href="/es">ES</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
