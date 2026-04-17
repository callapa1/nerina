import Link from 'next/link';

type MobileMenuProps = {
  locale: string;
  labels: {
    menu: string;
    home: string;
    about: string;
    work: string;
    contact: string;
  };
};

export function MobileMenu({locale, labels}: MobileMenuProps) {
  return (
    <details className="md:hidden">
      <summary className="cursor-pointer list-none rounded-full border border-black/20 px-4 py-2 text-xs uppercase tracking-[0.2em]">
        {labels.menu}
      </summary>
      <div className="mt-3 grid gap-2 rounded-2xl border border-black/10 bg-white/70 p-4 text-sm uppercase tracking-[0.15em]">
        <Link href={`/${locale}`}>{labels.home}</Link>
        <Link href={`/${locale}/about`}>{labels.about}</Link>
        <Link href={`/${locale}/work`}>{labels.work}</Link>
        <Link href={`/${locale}/contact`}>{labels.contact}</Link>
      </div>
    </details>
  );
}
