/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly RESEND_AUDIENCE_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
