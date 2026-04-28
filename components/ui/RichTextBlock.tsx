type RichTextBlockProps = {
  id?: string;
  paragraphs: React.ReactNode[];
  card?: boolean;
};

export function RichTextBlock({id, paragraphs, card = false}: RichTextBlockProps) {
  return (
    <div id={id} className="grid gap-5 text-black/85">
      {paragraphs.map((paragraph, index) =>
        card ? (
          <div key={index} id={id ? `${id}-panel-${index + 1}` : undefined} className="panel">
            <p className="text-[length:var(--fs-base)] leading-relaxed">{paragraph}</p>
          </div>
        ) : (
          <p key={index} className="max-w-5xl text-[length:var(--fs-base)] leading-relaxed">
            {paragraph}
          </p>
        )
      )}
    </div>
  );
}
