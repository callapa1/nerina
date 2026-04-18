import {getTranslations} from 'next-intl/server';
import {PageIntro} from '@/components/sections/PageIntro';
import {RichTextBlock} from '@/components/ui/RichTextBlock';

export default async function AboutPage() {
  const t = await getTranslations('About');

  return (
    <section id="about-page" className="space-y-8 pb-8">
      <PageIntro id="about-page-intro" title={t('title')} description={t('description')} />

      <RichTextBlock id="about-block-1" card paragraphs={[t('paragraph1'), t('paragraph2')]} />

      <RichTextBlock id="about-block-2" card paragraphs={[t('paragraph3')]} />

      <RichTextBlock id="about-block-3" card paragraphs={[t('paragraph4')]} />
    </section>
  );
}
