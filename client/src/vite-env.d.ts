/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_API: string,
    readonly VITE_APP_VEHICLES: string,
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
