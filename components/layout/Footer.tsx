type FooterProps = {
  text: string;
};

export function Footer({text}: FooterProps) {
  return <footer className="mt-16 border-t border-black/10 pt-6 text-sm text-black/60">{text}</footer>;
}
