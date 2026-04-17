import {SectionHeading} from '@/components/ui/SectionHeading';

type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({title, description}: PageIntroProps) {
  return <SectionHeading title={title} subtitle={description} />;
}
