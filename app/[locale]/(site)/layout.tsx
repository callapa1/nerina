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
      <div className="flex flex-1 flex-col">
        <Header
          locale={locale}
          labels={{
            about: nav('about'),
            resume: nav('resume'),
            contact: nav('contact'),
            localeLabel: nav('localeLabel'),
            role: nav('role'),
            resumeHref: nav('resumeHref')
          }}
        />
        <div id="site-page-frame" className="flex-1 px-9">
          <main id="site-main" className="mx-auto w-full max-w-[1440px]">{children}</main>
        </div>
      </div>
      <Footer
        text={footer('copyright')}
        emailHref={footer('emailHref')}
        emailLabel={footer('emailLabel')}
        linkedInLabel={footer('linkedInLabel')}
        linkedInHref={footer('linkedInHref')}
      />
    </SiteShell>
  );
}
