import {SectionHeading} from '@/components/ui/SectionHeading';

type PageIntroProps = {
  id?: string;
  title: string;
  description: string;
};

export function PageIntro({id, title, description}: PageIntroProps) {
  return (
    <div id={id}>
      <SectionHeading title={title} subtitle={description} />
    </div>
  );
}
