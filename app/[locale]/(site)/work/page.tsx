import {getTranslations} from 'next-intl/server';
import {WorkFeature} from '@/components/sections/WorkFeature';

export default async function WorkPage() {
  const t = await getTranslations('Work');

  return (
    <section id="work-page" className="pb-8">
      <WorkFeature
        heroTitle={t('heroTitle')}
        heroDescription={t('heroDescription')}
        heading={t('heading')}
        intro={t('intro')}
        projectLabel={t('projectLabel')}
        descriptionLabel={t('descriptionLabel')}
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
