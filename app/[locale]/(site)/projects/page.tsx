import {getTranslations} from 'next-intl/server';
import {WorkFeature} from '@/components/sections/WorkFeature';

export default async function ProjectsPage() {
  const t = await getTranslations('Work');

  return (
    <section id="projects-page" className="pt-20 pb-20">
      <WorkFeature
        heading={t('heading')}
        intro={t('intro')}
        projectLabel={t('projectLabel')}
        descriptionLabel={t('descriptionLabel')}
        projectCtaLabel={t('projectCtaLabel')}
        project={{
          name: t('project.name'),
          discipline: t('project.discipline'),
          summary: t('project.summary'),
          context: t('project.context')
        }}
      />

      <div id="work-intro-before-digital" className="enter-fade mt-[40px] [animation-delay:220ms]">
        <h3 className="type-title-30">{t('beforeDigitalTitle')}</h3>
        <p className="mt-3 text-[length:var(--fs-3xl)] font-light italic leading-[140%] tracking-[0.02em] text-black/85">{t('beforeDigitalSubtitle')}</p>
      </div>
    </section>
  );
}
