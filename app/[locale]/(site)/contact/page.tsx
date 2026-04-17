import {getTranslations} from 'next-intl/server';
import {ContactLinks} from '@/components/sections/ContactLinks';
import {PageIntro} from '@/components/sections/PageIntro';
import {RichTextBlock} from '@/components/ui/RichTextBlock';

export default async function ContactPage() {
  const t = await getTranslations('Contact');

  const links = [
    {label: t('links.0.label'), href: t('links.0.href')},
    {label: t('links.1.label'), href: t('links.1.href')},
    {label: t('links.2.label'), href: t('links.2.href')}
  ];

  return (
    <section className="space-y-8">
      <PageIntro title={t('title')} description={t('description')} />
      <RichTextBlock paragraphs={[t('paragraph1')]} />
      <ContactLinks items={links} />
    </section>
  );
}
