import {getTranslations} from 'next-intl/server';
import {PageIntro} from '@/components/sections/PageIntro';
import {RichTextBlock} from '@/components/ui/RichTextBlock';

export default async function AboutPage() {
  const t = await getTranslations('About');

  return (
    <section className="space-y-8">
      <PageIntro title={t('title')} description={t('description')} />
      <RichTextBlock paragraphs={[t('paragraph1'), t('paragraph2')]} />
    </section>
  );
}
