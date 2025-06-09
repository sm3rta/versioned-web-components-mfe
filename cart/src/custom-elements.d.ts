declare global {
  namespace JSX {
    interface IntrinsicElements {
      "button-component": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        size?: "small" | "medium" | "large";
      };
    }
  }
}

export {};
