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
    <section id="contact-page" className="space-y-8 pt-20 pb-20">
      <PageIntro
        id="contact-page-intro"
        title={t('title')}
        description={t('description')}
        titleClassName="type-title-30"
        subtitleClassName="type-subtitle-28-italic"
      />

      <div id="contact-content-grid" className="mx-auto flex w-[1372px] items-start justify-center gap-10">
        <div id="contact-form-wrap">
          <ContactForm
            fullNameLabel={t('form.fullNameLabel')}
            fullNamePlaceholder={t('form.fullNamePlaceholder')}
            emailLabel={t('form.emailLabel')}
            emailPlaceholder={t('form.emailPlaceholder')}
            messageLabel={t('form.messageLabel')}
            messagePlaceholder={t('form.messagePlaceholder')}
            submitLabel={t('form.submitLabel')}
            submittingLabel={t('form.submittingLabel')}
            requiredError={t('form.requiredError')}
            invalidEmail={t('form.invalidEmail')}
            success={t('form.success')}
            error={t('form.error')}
            subject={t('form.subject')}
          />
        </div>

        <div id="contact-links-wrap" className="flex h-[168px] w-fit flex-col gap-[8px] px-[40px] py-[44px]">
          <ContactLinks items={links} />
        </div>
      </div>
    </section>
  );
}
