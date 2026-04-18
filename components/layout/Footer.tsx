import Image from 'next/image';

type FooterProps = {
  emailHref: string;
  emailLabel: string;
  linkedInLabel: string;
  linkedInHref: string;
  text: string;
  withTopMargin?: boolean;
};

export function Footer({emailHref, emailLabel, linkedInLabel, linkedInHref, text, withTopMargin = true}: FooterProps) {
  return (
    <footer
      className={`${withTopMargin ? 'mt-20' : 'mt-0'} flex h-[164px] w-full flex-col items-center gap-4 border-t border-black/30 pt-10 pb-10 text-center`}
    >
      <div className="mx-auto flex h-[84px] w-[211px] flex-col items-center gap-2">
        <div className="flex w-fit items-center justify-center gap-3">
          <a
            className="inline-flex h-7 w-7 items-center justify-center"
            href={emailHref}
            aria-label={emailLabel}
          >
            <Image src="/illustrations/mail.svg" alt="" aria-hidden="true" width={28} height={22} />
          </a>
          <a
            className="inline-flex h-7 w-7 items-center justify-center"
            href={linkedInHref}
            target="_blank"
            rel="noreferrer"
            aria-label={linkedInLabel}
          >
            <Image src="/illustrations/linkedin.svg" alt="" aria-hidden="true" width={28} height={28} />
          </a>
        </div>
        <p className="h-px w-56 bg-black/45" aria-hidden />
        <p className="text-sm text-black/70">{text}</p>
      </div>
    </footer>
  );
}
