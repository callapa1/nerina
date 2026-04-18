import {SectionHeading} from '@/components/ui/SectionHeading';

type PageIntroProps = {
  id?: string;
  title: string;
  description: string;
};

export function PageIntro({id, title, description}: PageIntroProps) {
  return (
    <div id={id} className={id === 'contact-page-intro' ? 'h-[81px] w-[446px]' : undefined}>
      <SectionHeading title={title} subtitle={description} />
    </div>
  );
}
