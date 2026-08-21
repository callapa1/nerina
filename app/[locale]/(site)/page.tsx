import {getTranslations} from 'next-intl/server';
import {HomeHero} from '@/components/sections/HomeHero';

export default async function LocalizedHomePage() {
  const t = await getTranslations('Work');

  return (
    <section id="home-page" className="flex flex-1 flex-col items-center justify-center py-20 -translate-y-[60px]">
      <HomeHero title={t('heroTitle')} description={t('heroDescription')} />
    </section>
  );
}
