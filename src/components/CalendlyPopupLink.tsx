'use client';

const CALENDLY_URL = 'https://calendly.com/drjanduffy/appointment';

interface CalendlyPopupLinkProps {
  children: React.ReactNode;
  className?: string;
  /** Use as button (default) or anchor that still opens popup */
  as?: 'button' | 'a';
  /** Called when popup is opened (e.g. close mobile menu) */
  onOpen?: () => void;
}

/** Opens Calendly popup on click. Use for "Book your free 15‑min call" etc. */
export function CalendlyPopupLink({ children, className, as = 'button', onOpen }: CalendlyPopupLinkProps) {
  const openPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpen?.();
    (window as Window & { Calendly?: { initPopupWidget: (opts: { url: string }) => void } }).Calendly?.initPopupWidget({ url: CALENDLY_URL });
  };

  if (as === 'a') {
    return (
      <a href={CALENDLY_URL} onClick={openPopup} className={className} role="button">
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={openPopup} className={className}>
      {children}
    </button>
  );
}
