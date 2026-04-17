type FooterProps = {
  emailLabel: string;
  linkedInLabel: string;
  linkedInHref: string;
  text: string;
};

export function Footer({emailLabel, linkedInLabel, linkedInHref, text}: FooterProps) {
  return (
    <footer className="mt-20 border-t border-black/30 py-10 text-center">
      <div className="mx-auto mb-3 flex w-fit items-center gap-3 text-black/70">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded border border-black/35 text-sm">@</span>
        <a className="inline-flex h-9 w-9 items-center justify-center rounded border border-black/35 text-sm" href={linkedInHref}>
          in
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
