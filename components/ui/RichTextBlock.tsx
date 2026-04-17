type RichTextBlockProps = {
  paragraphs: string[];
};

export function RichTextBlock({paragraphs}: RichTextBlockProps) {
  return (
    <div className="grid gap-4 text-black/75">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="max-w-3xl leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
