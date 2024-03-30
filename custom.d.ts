declare module '*.png' {
  const value: string;
  export = value;
}

interface ImportMetaEnv {
  readonly VITE_NODE_ENV?: string;
  readonly VITE_DEVELOPMENT_BACKEND_ADDRESS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
