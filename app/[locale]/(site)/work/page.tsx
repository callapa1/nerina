import {getTranslations} from 'next-intl/server';
import {PageIntro} from '@/components/sections/PageIntro';
import {ProjectGrid} from '@/components/sections/ProjectGrid';

export default async function WorkPage() {
  const t = await getTranslations('Work');

  const projects = [
    {
      title: t('projects.0.title'),
      summary: t('projects.0.summary'),
      tags: [t('projects.0.tags.0'), t('projects.0.tags.1'), t('projects.0.tags.2')]
    },
    {
      title: t('projects.1.title'),
      summary: t('projects.1.summary'),
      tags: [t('projects.1.tags.0'), t('projects.1.tags.1'), t('projects.1.tags.2')]
    },
    {
      title: t('projects.2.title'),
      summary: t('projects.2.summary'),
      tags: [t('projects.2.tags.0'), t('projects.2.tags.1'), t('projects.2.tags.2')]
    }
  ];

  return (
    <section className="space-y-8">
      <PageIntro title={t('title')} description={t('description')} />
      <ProjectGrid projects={projects} />
    </section>
  );
}
