import {getTranslations} from 'next-intl/server';
import {ContactForm} from '@/components/sections/ContactForm';
import {ContactLinks} from '@/components/sections/ContactLinks';
import {PageIntro} from '@/components/sections/PageIntro';

export default async function ContactPage() {
  const t = await getTranslations('Contact');

  const links = [
    {label: t('links.0.label'), href: t('links.0.href')},
    {label: t('links.1.label'), href: t('links.1.href')}
  ];

  return (
    <section id="contact-page" className="space-y-12 pb-8 pt-8">
      <PageIntro id="contact-page-intro" title={t('title')} description={t('description')} />

      <div id="contact-content-grid" className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <ContactForm
          fullNameLabel={t('form.fullNameLabel')}
          fullNamePlaceholder={t('form.fullNamePlaceholder')}
          emailLabel={t('form.emailLabel')}
          emailPlaceholder={t('form.emailPlaceholder')}
          messageLabel={t('form.messageLabel')}
          messagePlaceholder={t('form.messagePlaceholder')}
          submitLabel={t('form.submitLabel')}
        />

        <div id="contact-links-wrap" className="md:pt-20">
          <ContactLinks items={links} />
        </div>
      </div>
    </section>
  );
}
