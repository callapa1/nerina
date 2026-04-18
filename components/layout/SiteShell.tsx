type SiteShellProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
};

export function SiteShell({children, fullWidth = false}: SiteShellProps) {
  return (
    <div
      className={`${fullWidth ? 'w-full max-w-none' : 'mx-auto max-w-[1520px]'} min-h-screen bg-[var(--paper)] px-6 py-4 sm:px-9`}
    >
      {children}
    </div>
  );
}
