import Link from 'next/link';
import Image from 'next/image';

type WorkFeatureProps = {
  heroTitle: string;
  heroDescription: string;
  heading: string;
  intro: string;
  projectLabel: string;
  descriptionLabel: string;
  projectCtaLabel: string;
  project: {
    name: string;
    discipline: string;
    summary: string;
    context: string;
  };
};

export function WorkFeature({heroTitle, heroDescription, heading, intro, projectLabel, descriptionLabel, projectCtaLabel, project}: WorkFeatureProps) {
  const contextLines = project.context
    .split('·')
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <section id="work-feature" className="space-y-8">
      <div id="work-hero" className="enter-fade flex flex-col items-center justify-center py-6 text-center">
        <h2 className="type-title-30">{heroTitle}</h2>
        <p className="mx-auto mt-3 w-[700px] text-center text-[30px] font-normal leading-[140%] tracking-[0.02em] text-black/85">
          {heroDescription}
        </p>
      </div>

      <div id="work-intro" className="enter-fade px-9 [animation-delay:80ms]">
        <h3 className="type-title-30">{heading}</h3>
        <p className="mt-3 max-w-5xl text-[28px] font-light italic leading-[140%] tracking-[0.02em] text-black/85">{intro}</p>
      </div>

      <article id="work-project-card" className="enter-fade mx-9 flex flex-col gap-0 [animation-delay:140ms]">
        <div id="work-image-grid" className="group relative grid gap-0 sm:grid-cols-3">
          <div id="work-image-tile-brand" className="image-tile grid place-items-center bg-[linear-gradient(150deg,#7ba18f,#b4cec0)]">
            <Image src="/images/portfolio/abc.png" alt="" aria-hidden="true" width={456} height={303} className="h-full w-full object-cover" />
          </div>
          <div id="work-image-tile-mobile" className="image-tile grid place-items-center bg-[linear-gradient(140deg,#8da0ba,#cdd7e4)]">
            <Image src="/images/portfolio/telefono.png" alt="" aria-hidden="true" width={456} height={303} className="h-full w-full object-cover" />
          </div>
          <div id="work-image-tile-persona" className="image-tile grid place-items-center bg-[linear-gradient(140deg,#af8d77,#dec4ad)]">
            <Image src="/images/portfolio/persona.jpg" alt="" aria-hidden="true" width={456} height={303} className="h-full w-full object-cover" />
          </div>
          <Link
            href="./work"
            className="teal-cta-button work-grid-cta pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100"
          >
            {projectCtaLabel}
          </Link>
        </div>

        <div id="work-project-meta" className="mt-6 grid w-full gap-x-4 gap-y-0 pb-4 text-black/85 sm:grid-cols-[140px_1fr] sm:items-start">
          <p className="type-meta-label tracking-[0]">{projectLabel}</p>
          <div id="work-project-title-block">
            <h3 className="text-[26px] font-semibold leading-[140%] tracking-[0]">{project.name}</h3>
            <p className="type-meta-label mt-1 tracking-[0]">{project.discipline}</p>
          </div>

          <p className="type-meta-label tracking-[0]">{descriptionLabel}</p>
          <div id="work-project-description-block">
            <p className="text-[20px] font-medium leading-[140%] tracking-[0] text-black">{project.summary}</p>
            <p className="type-meta-label tracking-[0]">
              {contextLines.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
