type ContactItem = {
  label: string;
  href: string;
};

type ContactLinksProps = {
  items: ContactItem[];
};

export function ContactLinks({items}: ContactLinksProps) {
  return (
    <ul className="grid gap-3 text-sm uppercase tracking-[0.12em]">
      {items.map((item) => (
        <li key={item.href}>
          <a className="inline-flex rounded-full border border-black/15 px-4 py-2" href={item.href}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
