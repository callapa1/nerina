import {getTranslations} from 'next-intl/server';

export default async function ContactPage() {
  const t = await getTranslations('Contact');

  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-semibold">{t('title')}</h1>
      <p className="max-w-2xl text-black/75">{t('description')}</p>
    </section>
  );
}
