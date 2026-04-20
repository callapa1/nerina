import {getTranslations} from 'next-intl/server';
import {PageIntro} from '@/components/sections/PageIntro';
import {RichTextBlock} from '@/components/ui/RichTextBlock';

export default async function AboutPage() {
  const t = await getTranslations('About');
  const richText = {
    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>
  };

  return (
    <section id="about-page" className="space-y-8 pb-8">
      <PageIntro
        id="about-page-intro"
        title={t('title')}
        description={t('description')}
        titleClassName="text-[30px] font-bold leading-[140%] tracking-[0.02em]"
        subtitleClassName="text-[28px] font-normal italic leading-[140%] tracking-[0.02em]"
      />

      <RichTextBlock id="about-block-1" card paragraphs={[t.rich('paragraph1', richText), t.rich('paragraph2', richText)]} />

      <RichTextBlock id="about-block-2" card paragraphs={[t.rich('paragraph3', richText)]} />

    </section>
  );
}
