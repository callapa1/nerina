import {CartographyCanvas} from './CartographyCanvas';

type HomeHeroProps = {
  title: string;
  description: string;
};

export function HomeHero({title, description}: HomeHeroProps) {
  return (
    <div id="home-hero" className="enter-fade flex flex-col items-center justify-center text-center">
      <h2 className="type-title-30">{title}</h2>
      <p className="mx-auto mt-3 w-[700px] text-center text-[length:var(--fs-4xl)] font-normal leading-[140%] tracking-[0.02em] text-black/85">
        {description}
      </p>
      <CartographyCanvas />
    </div>
  );
}
