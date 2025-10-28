interface ImportMetaEnv {
  readonly VITE_PHONE: string;
  readonly VITE_MAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}