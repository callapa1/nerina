type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({children}: SiteShellProps) {
  return (
    <div id="site-shell" className="min-h-screen w-full bg-[var(--paper)] py-0">
      {children}
    </div>
  );
}
