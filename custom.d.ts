interface ImportMetaEnv {
  readonly VITE_NODE_ENV?: string;
  readonly VITE_DEVELOPMENT_BACKEND_ADDRESS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const value: string;
  export = value;
}
