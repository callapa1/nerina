import Image from 'next/image';

type ContactItem = {
  label: string;
  href: string;
};

type ContactLinksProps = {
  items: ContactItem[];
};

export function ContactLinks({items}: ContactLinksProps) {
  return (
    <ul className="enter-fade [animation-delay:160ms] grid gap-5 text-xl text-black/85 sm:text-2xl">
      {items.map((item) => (
        <li className="flex items-center gap-3" key={item.href}>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded border border-black/25 bg-white/70">
            <Image
              src={item.href.startsWith('mailto:') ? '/illustrations/mail.svg' : '/illustrations/linkedin.svg'}
              alt=""
              aria-hidden="true"
              width={22}
              height={22}
            />
          </span>
          <a className="underline decoration-black/45 underline-offset-4" href={item.href}>
            {item.href.replace('mailto:', '').replace(/^https?:\/\/(www\.)?/, '')}
          </a>
        </li>
      ))}
    </ul>
  );
}
