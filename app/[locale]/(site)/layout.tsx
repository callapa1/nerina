import {getTranslations} from 'next-intl/server';
import {Footer} from '@/components/layout/Footer';
import {Header} from '@/components/layout/Header';
import {SiteShell} from '@/components/layout/SiteShell';

type SiteLayoutProps = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function SiteLayout({children, params}: SiteLayoutProps) {
  const {locale} = await params;
  const nav = await getTranslations('Nav');
  const footer = await getTranslations('Footer');

  return (
    <SiteShell>
      <Header
        locale={locale}
        labels={{
          home: nav('home'),
          about: nav('about'),
          work: nav('work'),
          contact: nav('contact'),
          menu: nav('menu'),
          localeLabel: nav('localeLabel')
        }}
      />
      <main>{children}</main>
      <Footer text={footer('copyright')} />
    </SiteShell>
  );
}
