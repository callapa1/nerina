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
  const homeFooter = withTopMargin === false;

  return (
    <footer
      id="site-footer"
      className={`${withTopMargin ? 'mt-20' : 'mt-0'} flex h-[164px] w-full items-center justify-center border-t border-black/30 text-center`}
    >
      <div
        id="footer-content"
        className={`mx-auto flex h-[84px] flex-col items-center justify-between ${homeFooter ? 'w-[211px]' : 'w-full max-[500px]:w-[211px]'}`}
      >
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
        <div
          id="footer-copy-block"
          className={`box-border flex h-[48px] flex-col items-center justify-start gap-2.5 border-t border-black/30 pt-[8px] ${homeFooter ? 'w-[211px]' : 'w-full max-[500px]:w-[211px]'}`}
        >
          <p className="text-center text-[14px] font-normal leading-[140%] tracking-[0] text-black/70">{text}</p>
        </div>
      </div>
    </footer>
  );
}
