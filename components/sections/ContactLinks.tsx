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
    <ul id="contact-links" className="enter-fade [animation-delay:160ms] grid w-fit gap-4 text-[length:var(--fs-lg)] text-black/85">
      {items.map((item) => (
        <li className="contact-link-item flex w-fit items-center gap-3" key={item.href}>
          <span className="inline-flex h-7 w-7 items-center justify-center">
            <Image
              src={item.href.startsWith('mailto:') ? '/illustrations/contact-mail.svg' : '/illustrations/contact-linkedin.svg'}
              alt=""
              aria-hidden="true"
              width={28}
              height={item.href.startsWith('mailto:') ? 22 : 28}
            />
          </span>
          <a
            className={item.href.startsWith('mailto:') ? 'whitespace-nowrap' : 'whitespace-nowrap underline decoration-black/45 underline-offset-4'}
            href={item.href}
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
          >
            {item.href.replace('mailto:', '').replace(/^https?:\/\/(www\.)?/, '')}
          </a>
        </li>
      ))}
    </ul>
  );
}
