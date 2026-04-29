'use client';

import type {AnchorHTMLAttributes, ReactNode} from 'react';

type SmoothHashLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: `#${string}`;
  children: ReactNode;
};

export function SmoothHashLink({href, children, onClick, ...props}: SmoothHashLinkProps) {
  function scrollToTarget(target: HTMLElement) {
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const duration = 550;
    const startedAt = performance.now();

    function step(now: number) {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start + (end - start) * eased);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented) {
          return;
        }

        const target = document.getElementById(href.slice(1));

        if (!target) {
          return;
        }

        event.preventDefault();

        scrollToTarget(target);
        window.history.pushState(null, '', href);
      }}
    >
      {children}
    </a>
  );
}
