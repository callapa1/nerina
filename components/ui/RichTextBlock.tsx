type RichTextBlockProps = {
  id?: string;
  paragraphs: React.ReactNode[];
  card?: boolean;
};

export function RichTextBlock({id, paragraphs, card = false}: RichTextBlockProps) {
  return (
    <div id={id} className="grid gap-5 text-black/85">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={card ? 'panel text-lg leading-relaxed sm:text-xl' : 'max-w-5xl text-lg leading-relaxed sm:text-xl'}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
