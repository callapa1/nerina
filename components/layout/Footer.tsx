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
    <footer id="site-footer" className="relative mt-0 flex h-[164px] w-full items-center justify-center text-center">
      <hr aria-hidden="true" className="absolute left-1/2 top-0 w-full -translate-x-1/2 border-0 border-t border-black/30" />
      <div id="footer-content" className="mx-auto flex h-[132px] w-[259px] flex-col items-center justify-between p-[24px]">
        <div id="footer-icon-row" className="flex h-7 w-[64px] shrink-0 items-center justify-between">
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
        <hr aria-hidden="true" className="w-full border-0 border-t-[1px] border-black/30" />
        <div
          id="footer-copy-block"
          className="box-border flex h-[48px] w-[211px] flex-col items-center justify-start gap-2.5 pt-[8px]"
        >
          <p className="w-[212px] text-center text-[14px] font-[400] not-italic leading-[140%] tracking-[0] text-black/70">{text}</p>
        </div>
      </div>
    </footer>
  );
}
