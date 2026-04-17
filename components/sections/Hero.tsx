import {SectionHeading} from '@/components/ui/SectionHeading';

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function Hero({eyebrow, title, description}: HeroProps) {
  return <SectionHeading eyebrow={eyebrow} title={title} subtitle={description} />;
}
