declare global {
  interface Window {
    CloudCMAWidget?: {
      init: () => void;
      show: (options: {
        post_url: string;
        source_url: string;
      }) => void;
    };
  }
} 