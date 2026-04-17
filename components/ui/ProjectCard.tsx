type ProjectCardProps = {
  title: string;
  summary: string;
  tags: string[];
};

export function ProjectCard({title, summary, tags}: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white/70 p-5">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-black/70">{summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-black/60">
        {tags.map((tag) => (
          <li key={tag} className="rounded-full border border-black/15 px-3 py-1">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
