/// <reference types="vite/client" />


// Di dalam file declaration.d.ts atau file .d.ts lainnya
declare const __APP_URL__: string;


interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
