declare const window: Window &
   typeof globalThis & {
    APP_CONFIG: any
   }



export const APP_Config=()=>{
    const env=window.APP_CONFIG;
    return env;
}