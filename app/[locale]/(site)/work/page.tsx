import {getTranslations} from 'next-intl/server';
import {WorkFeature} from '@/components/sections/WorkFeature';

export default async function WorkPage() {
  const t = await getTranslations('Work');

  return (
    <section className="pb-8">
      <WorkFeature
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
