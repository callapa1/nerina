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
    <ul id="contact-links" className="enter-fade [animation-delay:160ms] grid gap-4 text-xl text-black/85 sm:text-2xl">
      {items.map((item) => (
        <li className="contact-link-item flex items-center gap-3" key={item.href}>
          <span className="inline-flex h-7 w-7 items-center justify-center">
            <Image
              src={item.href.startsWith('mailto:') ? '/illustrations/mail.svg' : '/illustrations/linkedin.svg'}
              alt=""
              aria-hidden="true"
              width={28}
              height={item.href.startsWith('mailto:') ? 22 : 28}
            />
          </span>
          <a
            className={item.href.startsWith('mailto:') ? '' : 'underline decoration-black/45 underline-offset-4'}
            href={item.href}
          >
            {item.href.replace('mailto:', '').replace(/^https?:\/\/(www\.)?/, '')}
          </a>
        </li>
      ))}
    </ul>
  );
}
