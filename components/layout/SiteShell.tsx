type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({children}: SiteShellProps) {
  return (
    <div className="min-h-screen w-full bg-[var(--paper)] px-6 py-4 sm:px-9">
      {children}
    </div>
  );
}
