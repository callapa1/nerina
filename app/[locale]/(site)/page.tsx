import {getTranslations} from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('Home');

  return (
    <section className="space-y-4">
      <p className="text-sm uppercase tracking-[0.2em] text-black/60">{t('eyebrow')}</p>
      <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{t('title')}</h1>
      <p className="max-w-2xl text-lg text-black/75">{t('description')}</p>
    </section>
  );
}
