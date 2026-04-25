import Image from 'next/image';

type WorkFeatureProps = {
  heroTitle: string;
  heroDescription: string;
  heading: string;
  intro: string;
  projectLabel: string;
  descriptionLabel: string;
  project: {
    name: string;
    discipline: string;
    summary: string;
    context: string;
  };
};

export function WorkFeature({heroTitle, heroDescription, heading, intro, projectLabel, descriptionLabel, project}: WorkFeatureProps) {
  return (
    <section id="work-feature" className="space-y-8">
      <div id="work-hero" className="enter-fade flex flex-col items-center justify-center py-6 text-center">
        <h2 className="type-title-30">{heroTitle}</h2>
        <p className="mx-auto mt-3 max-w-4xl text-center text-[30px] font-normal leading-[140%] tracking-[0.02em] text-black/85">
          {heroDescription}
        </p>
      </div>

      <div id="work-intro" className="enter-fade px-9 [animation-delay:80ms]">
        <h3 className="type-title-30">{heading}</h3>
        <p className="mt-3 max-w-5xl text-[28px] font-normal leading-[140%] tracking-[0.02em] text-black/85">{intro}</p>
      </div>

      <article id="work-project-card" className="panel enter-fade gap-0 p-0 shadow-none [animation-delay:140ms]">
        <div id="work-image-grid" className="grid gap-0 px-9 sm:grid-cols-3">
          <div className="image-tile grid place-items-center bg-[linear-gradient(150deg,#7ba18f,#b4cec0)]">
            <Image src="/images/portfolio/abc.png" alt="" aria-hidden="true" width={456} height={303} className="h-full w-full object-cover" />
          </div>
          <div className="image-tile grid place-items-center bg-[linear-gradient(140deg,#8da0ba,#cdd7e4)]">
            <Image src="/images/portfolio/telefono.png" alt="" aria-hidden="true" width={456} height={303} className="h-full w-full object-cover" />
          </div>
          <div className="image-tile grid place-items-center bg-[linear-gradient(140deg,#af8d77,#dec4ad)]">
            <Image src="/images/portfolio/persona.jpg" alt="" aria-hidden="true" width={456} height={303} className="h-full w-full object-cover" />
          </div>
        </div>

        <div id="work-project-meta" className="mt-6 grid gap-x-4 gap-y-0 px-9 pb-4 text-black/85 sm:grid-cols-[140px_1fr] sm:items-start">
          <p className="type-meta-label tracking-[0]">{projectLabel}</p>
          <div>
            <h3 className="text-[26px] font-semibold leading-[140%] tracking-[0]">{project.name}</h3>
            <p className="type-meta-label mt-1 tracking-[0]">{project.discipline}</p>
          </div>

          <p className="type-meta-label tracking-[0]">{descriptionLabel}</p>
          <div>
            <p className="text-[20px] font-medium leading-[140%] tracking-[0] text-black">{project.summary}</p>
            <p className="type-meta-label tracking-[0]">{project.context}</p>
          </div>
        </div>
      </article>
    </section>
  );
}
