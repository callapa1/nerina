import {getTranslations} from 'next-intl/server';
import {Hero} from '@/components/sections/Hero';

type HomePageProps = {
  params: Promise<{locale: string}>;
};

export default async function HomePage({params}: HomePageProps) {
  const {locale} = await params;
  const t = await getTranslations('Home');

  return (
    <Hero locale={locale} title={t('title')} role={t('role')} description={t('description')} cta={t('cta')} />
  );
}
