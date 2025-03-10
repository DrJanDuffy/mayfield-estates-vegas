declare global {
  interface Window {
    Homebot?: (selector: string, token: string, config: { theme: string }) => void;
    __hb_namespace?: string;
  }
} 