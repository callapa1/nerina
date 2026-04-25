import {getTranslations} from 'next-intl/server';
import {WorkCaseStudy} from '@/components/sections/WorkCaseStudy';

export default async function WorkPage() {
  const t = await getTranslations('Work');

  return (
    <section id="work-page" className="pb-8">
      <WorkCaseStudy
        heroBlurb={t('caseStudy.heroBlurb')}
        rail={{
          context: t('caseStudy.rail.context'),
          contextItems: [t('caseStudy.rail.contextItems.0'), t('caseStudy.rail.contextItems.1'), t('caseStudy.rail.contextItems.2')],
          users: t('caseStudy.rail.users'),
          usersItems: [t('caseStudy.rail.usersItems.0'), t('caseStudy.rail.usersItems.1')],
          mvp: t('caseStudy.rail.mvp'),
          structure: t('caseStudy.rail.structure'),
          structureItems: [t('caseStudy.rail.structureItems.0'), t('caseStudy.rail.structureItems.1'), t('caseStudy.rail.structureItems.2')]
        }}
        sectionNumber={t('caseStudy.sectionNumber')}
        sectionQuestion={t('caseStudy.sectionQuestion')}
        sectionParagraph1={t('caseStudy.sectionParagraph1')}
        sectionParagraph2={t('caseStudy.sectionParagraph2')}
      />
    </section>
  );
}
