import {getTranslations} from 'next-intl/server';
import {WorkCaseStudy} from '@/components/sections/WorkCaseStudy';

type WorkPageProps = {
  params: Promise<{locale: string}>;
};

export default async function WorkPage({params}: WorkPageProps) {
  const {locale} = await params;
  const t = await getTranslations('Work.quierenTaparme');

  return (
    <section id="work-page" className="pb-20">
      <WorkCaseStudy caseStudy={t.raw('caseStudy')} locale={locale} showHero={false} />
    </section>
  );
}
