import {SectionHeading} from '@/components/ui/SectionHeading';

type PageIntroProps = {
  id?: string;
  className?: string;
  title: string;
  description: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function PageIntro({id, className, title, description, titleClassName, subtitleClassName}: PageIntroProps) {
  return (
    <div id={id} className={className}>
      <SectionHeading title={title} subtitle={description} titleClassName={titleClassName} subtitleClassName={subtitleClassName} />
    </div>
  );
}
