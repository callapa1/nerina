import {getTranslations} from 'next-intl/server';
import {WorkCaseStudy} from '@/components/sections/WorkCaseStudy';

export default async function WorkPage() {
  const t = await getTranslations('Work');

  return (
    <section id="work-page" className="pb-8">
      <WorkCaseStudy caseStudy={t.raw('caseStudy')} />
    </section>
  );
}
