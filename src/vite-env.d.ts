/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
