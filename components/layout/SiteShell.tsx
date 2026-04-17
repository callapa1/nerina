type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({children}: SiteShellProps) {
  return <div className="mx-auto min-h-screen max-w-5xl px-6 py-8 sm:px-8">{children}</div>;
}
