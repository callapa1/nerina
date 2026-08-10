import {getTranslations} from 'next-intl/server';
import {WorkFeature} from '@/components/sections/WorkFeature';

export default async function ProjectsPage() {
  const t = await getTranslations('Work');

  return (
    <section id="projects-page" className="pb-8">
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
    </section>
  );
}
