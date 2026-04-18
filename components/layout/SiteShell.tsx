type SiteShellProps = {
  children: React.ReactNode;
  showSideBorders?: boolean;
  fullWidth?: boolean;
};

export function SiteShell({children, showSideBorders = true, fullWidth = false}: SiteShellProps) {
  return (
    <div
      className={`${fullWidth ? 'w-full max-w-none' : 'mx-auto max-w-[1520px]'} min-h-screen bg-[var(--paper)] px-6 py-4 sm:px-9 ${showSideBorders ? 'border-x border-black/35' : ''}`}
    >
      {children}
    </div>
  );
}
