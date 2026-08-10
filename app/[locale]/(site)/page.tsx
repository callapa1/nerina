import {getTranslations} from 'next-intl/server';
import {HomeHero} from '@/components/sections/HomeHero';

export default async function LocalizedHomePage() {
  const t = await getTranslations('Work');

  return (
    <section id="home-page" className="pb-8">
      <HomeHero title={t('heroTitle')} description={t('heroDescription')} />
    </section>
  );
}
