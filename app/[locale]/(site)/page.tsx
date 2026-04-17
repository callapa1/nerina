import {getTranslations} from 'next-intl/server';
import {Hero} from '@/components/sections/Hero';

export default async function HomePage() {
  const t = await getTranslations('Home');

  return (
    <section>
      <Hero eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />
    </section>
  );
}
