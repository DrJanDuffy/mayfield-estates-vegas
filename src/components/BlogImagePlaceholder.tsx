'use client';

interface BlogImagePlaceholderProps {
  width: number;
  height: number;
  text: string;
}

// Pre-generate a default gradient background
const defaultGradient = 'data:image/svg+xml;base64,' + Buffer.from(`
<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
</svg>
`).toString('base64');

export function BlogImagePlaceholder({ width, height, text }: BlogImagePlaceholderProps) {
  // Return the default gradient for all placeholders
  return defaultGradient;
} 