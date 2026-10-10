"use client";

import type { MouseEvent, ReactNode } from "react";

type SmoothScrollLinkProps = {
  href: `#${string}`;
  className: string;
  children: ReactNode;
  duration?: number;
};

export default function SmoothScrollLink({
  href,
  className,
  children,
  duration = 1400,
}: SmoothScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = href === "#" ? document.documentElement : document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", href);

    const startY = window.scrollY;
    const targetY = href === "#" ? 0 : startY + target.getBoundingClientRect().top;
    const distance = targetY - startY;
    const startTime = performance.now();

    function scrollFrame(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 0.5 - Math.cos(Math.PI * progress) / 2;
      window.scrollTo({ top: startY + distance * easedProgress, behavior: "instant" });

      if (progress < 1) requestAnimationFrame(scrollFrame);
    }

    requestAnimationFrame(scrollFrame);
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}