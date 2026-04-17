type WorkFeatureProps = {
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

export function WorkFeature({heading, intro, projectLabel, descriptionLabel, project}: WorkFeatureProps) {
  return (
    <section className="space-y-6">
      <div className="panel enter-fade">
        <h2 className="text-4xl font-semibold sm:text-5xl">{heading}</h2>
        <p className="mt-3 max-w-4xl text-2xl leading-snug text-black/85 sm:text-3xl">{intro}</p>
      </div>

      <article className="panel enter-fade [animation-delay:120ms]">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="image-tile bg-[linear-gradient(140deg,#5d7f70,#a8c6b6)]" />
          <div className="image-tile bg-[linear-gradient(140deg,#7489a9,#cfd8ea)]" />
          <div className="image-tile bg-[linear-gradient(140deg,#a97f63,#dfc1a6)]" />
        </div>

        <div className="mt-6 grid gap-4 text-black/85 sm:grid-cols-[140px_1fr] sm:items-start">
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
