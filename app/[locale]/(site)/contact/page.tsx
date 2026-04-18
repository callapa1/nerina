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
    <section id="contact-page" className="mx-auto w-[95%] space-y-12 pb-8 pt-8">
      <PageIntro
        id="contact-page-intro"
        className="h-[81px] w-[446px]"
        title={t('title')}
        description={t('description')}
        titleClassName="text-[30px] font-bold leading-[140%] tracking-[0.02em]"
        subtitleClassName="text-[28px] font-normal italic leading-[140%] tracking-[0.02em]"
      />

      <div id="contact-content-grid" className="mx-auto grid h-[485px] w-[1372px] justify-items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div id="contact-form-wrap">
          <ContactForm
            fullNameLabel={t('form.fullNameLabel')}
            fullNamePlaceholder={t('form.fullNamePlaceholder')}
            emailLabel={t('form.emailLabel')}
            emailPlaceholder={t('form.emailPlaceholder')}
            messageLabel={t('form.messageLabel')}
            messagePlaceholder={t('form.messagePlaceholder')}
            submitLabel={t('form.submitLabel')}
          />
        </div>

        <div id="contact-links-wrap" className="flex h-[168px] w-[415px] flex-col gap-[8px] px-[40px] py-[44px]">
          <ContactLinks items={links} />
        </div>
      </div>
    </section>
  );
}
