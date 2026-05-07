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
    <footer id="site-footer" className="relative mt-0 flex w-full text-center">
      <hr aria-hidden="true" className="absolute left-1/2 top-0 w-full -translate-x-1/2 border-0 border-t border-black/30" />
      <div id="footer-content" className="mx-auto flex w-[259px] flex-col items-center p-[24px]">
        <div id="footer-icon-row" className="flex items-center gap-2">
          <a
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center"
            href={emailHref}
            aria-label={emailLabel}
          >
            <Image
              src="/illustrations/mail.svg"
              alt=""
              aria-hidden="true"
              width={28}
              height={22}
              className="h-[22.4px] w-7"
            />
          </a>
          <a
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center"
            href={linkedInHref}
            target="_blank"
            rel="noreferrer"
            aria-label={linkedInLabel}
          >
            <Image src="/illustrations/linkedin.svg" alt="" aria-hidden="true" width={28} height={28} className="h-7 w-7" />
          </a>
        </div>
        <div id="footer-copy-block" className="mt-2 flex w-full flex-col items-center">
          <hr aria-hidden="true" className="w-full border-0 border-t-[1px] border-black/30" />
          <p className="mt-2 text-center text-[length:var(--fs-xs)] font-[400] not-italic leading-[140%] tracking-[0] text-black/70">{text}</p>
        </div>
      </div>
    </footer>
  );
}
