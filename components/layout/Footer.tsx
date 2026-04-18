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
    <footer className={`${withTopMargin ? 'mt-20' : 'mt-0'} border-t border-black/30 py-10 text-center`}>
      <div className="mx-auto mb-2 flex w-fit items-center justify-center gap-3">
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
      <p className="mx-auto mb-2 h-px w-56 bg-black/45" aria-hidden />
      <p className="text-sm text-black/70">{text}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-black/55">
        {emailLabel} · {linkedInLabel}
      </p>
    </footer>
  );
}
