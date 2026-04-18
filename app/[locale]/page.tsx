import {getTranslations} from 'next-intl/server';
import {Footer} from '@/components/layout/Footer';
import {SiteShell} from '@/components/layout/SiteShell';
import {Hero} from '@/components/sections/Hero';

export default async function HomePage() {
  const home = await getTranslations('Home');
  const footer = await getTranslations('Footer');

  return (
    <SiteShell>
      <main>
        <Hero title={home('title')} role={home('role')} />
      </main>
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
