type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({children}: SiteShellProps) {
  return (
    <div className="mx-auto min-h-screen max-w-[1520px] border-x border-black/35 bg-[var(--paper)] px-6 py-4 sm:px-9">
      {children}
    </div>
  );
}
