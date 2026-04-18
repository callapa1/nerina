import Image from 'next/image';

type FooterProps = {
  emailHref: string;
  emailLabel: string;
  linkedInLabel: string;
  linkedInHref: string;
  text: string;
};

export function Footer({emailHref, emailLabel, linkedInLabel, linkedInHref, text}: FooterProps) {
  return (
    <footer className="mt-20 border-t border-black/30 py-10 text-center">
      <div className="mx-auto mb-2 flex w-fit items-center gap-2">
        <a
          className="inline-flex h-9 w-9 items-center justify-center rounded border border-black/25 bg-white/70"
          href={emailHref}
          aria-label={emailLabel}
        >
          <Image src="/illustrations/mail.svg" alt="" aria-hidden="true" width={20} height={16} />
        </a>
        <a
          className="inline-flex h-9 w-9 items-center justify-center rounded border border-black/25 bg-white/70"
          href={linkedInHref}
          target="_blank"
          rel="noreferrer"
          aria-label={linkedInLabel}
        >
          <Image src="/illustrations/linkedin.svg" alt="" aria-hidden="true" width={20} height={20} />
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
