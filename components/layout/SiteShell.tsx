type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({children}: SiteShellProps) {
  return (
    <div id="site-shell" className="flex min-h-screen w-full flex-col bg-[var(--paper)] py-0">
      {children}
    </div>
  );
}
