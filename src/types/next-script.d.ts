import 'next/script';

declare module 'next/script' {
  interface ScriptProps {
    src?: string;
    type?: string;
    dangerouslySetInnerHTML?: { __html: string };
  }
}
