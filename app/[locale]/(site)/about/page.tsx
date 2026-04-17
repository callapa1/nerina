import {getTranslations} from 'next-intl/server';
import {PageIntro} from '@/components/sections/PageIntro';
import {RichTextBlock} from '@/components/ui/RichTextBlock';

export default async function AboutPage() {
  const t = await getTranslations('About');

  return (
    <section className="space-y-8 pb-8">
      <PageIntro title={t('title')} description={t('description')} />

      <RichTextBlock card paragraphs={[t('paragraph1'), t('paragraph2')]} />

      <RichTextBlock card paragraphs={[t('paragraph3')]} />

      <RichTextBlock card paragraphs={[t('paragraph4')]} />
    </section>
  );
}
