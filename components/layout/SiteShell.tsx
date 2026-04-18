type SiteShellProps = {
  children: React.ReactNode;
  showSideBorders?: boolean;
};

export function SiteShell({children, showSideBorders = true}: SiteShellProps) {
  return (
    <div
      className={`mx-auto min-h-screen max-w-[1520px] bg-[var(--paper)] px-6 py-4 sm:px-9 ${showSideBorders ? 'border-x border-black/35' : ''}`}
    >
      {children}
    </div>
  );
}
