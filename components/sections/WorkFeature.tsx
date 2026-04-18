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
      <div id="work-hero" className="enter-fade border-y border-black/20 py-6 text-center">
        <h2 className="text-5xl font-semibold sm:text-6xl">{heroTitle}</h2>
        <p className="mx-auto mt-3 max-w-4xl text-4xl leading-snug text-black/85 sm:text-5xl">{heroDescription}</p>
      </div>

      <div id="work-intro" className="enter-fade [animation-delay:80ms]">
        <h3 className="text-5xl font-semibold sm:text-6xl">{heading}</h3>
        <p className="mt-3 max-w-5xl text-3xl leading-snug text-black/85 sm:text-4xl">{intro}</p>
      </div>

      <article id="work-project-card" className="panel enter-fade [animation-delay:140ms]">
        <div id="work-image-grid" className="grid gap-0.5 sm:grid-cols-3">
          <div className="image-tile grid place-items-center bg-[linear-gradient(150deg,#7ba18f,#b4cec0)]">
            <Image src="/illustrations/abcComunidad.svg" alt="" aria-hidden="true" width={240} height={220} />
          </div>
          <div className="image-tile bg-[linear-gradient(140deg,#8da0ba,#cdd7e4)]" />
          <div className="image-tile bg-[linear-gradient(140deg,#af8d77,#dec4ad)]" />
        </div>

        <div id="work-project-meta" className="mt-6 grid gap-4 text-black/85 sm:grid-cols-[140px_1fr] sm:items-start">
          <p className="text-xl">{projectLabel}</p>
          <div>
            <h3 className="text-4xl font-semibold">{project.name}</h3>
            <p className="mt-1 text-xl text-black/75">{project.discipline}</p>
          </div>

          <p className="text-xl">{descriptionLabel}</p>
          <div className="space-y-2 text-xl leading-relaxed sm:text-2xl">
            <p>{project.summary}</p>
            <p className="font-medium">{project.context}</p>
          </div>
        </div>
      </article>
    </section>
  );
}
