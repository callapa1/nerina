import {getTranslations} from 'next-intl/server';
import {HomeHero} from '@/components/sections/HomeHero';

export default async function LocalizedHomePage() {
  const t = await getTranslations('Work');

  return (
    <section id="home-page" className="pt-20 pb-20">
      <HomeHero title={t('heroTitle')} description={t('heroDescription')} />
    </section>
  );
}
