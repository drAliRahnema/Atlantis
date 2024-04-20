// https://nuxt.com/docs/api/configuration/nuxt-config
const baseUrl = "/";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      title: "Nuxt App",
      meta: [
        // <meta name="description" content="">
        // { name: "description", content: "" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      ],
    },
    script: [
      // {
      //   src: '',
      //   integrity: "",
      //   crossorigin:"anonymous",
      //   body: true
      // }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // { type:"text/javascript", href: "https://unpkg.com/default-passive-events" },
      // {
      //   id: "theme-css",
      //   rel: "stylesheet",
      //   href: baseUrl + "template/lara-dark-teal/theme.css",
      // },
    ],
  },
  devtools: { enabled: true },
  // ssr: false,
  typescript: {
    shim: false,
  },
  modules: [
    // "@nuxtjs/tailwindcss",
    'nuxt-primevue',
    "@nuxtjs/i18n",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  primevue: {
    /* Options */
    usePrimeVue: true,
    options: {
      unstyled: false,
      ripple: true,
      inputStyle: 'filled',
      zIndex: {
        modal: 1100,        //dialog, sidebar
        overlay: 1000,      //dropdown, overlaypanel
        menu: 1000,         //overlay menus
        tooltip: 1100       //tooltip
      }
    },
    components: {
      prefix: '',
      include: '*',
      exclude: []
    },
    directives: {
      prefix: 'p',
      include: '*',
      exclude: []
    },
    composables: {
      include: '*'
    },
    importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
    // importPT: { as: 'MyCustomPreset', from: path.resolve(__dirname, './assets/presets/mypreset.js')},
    // importPT: { as: 'Lara', from: path.resolve(__dirname, './presets/lara/') },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
  },
  i18n: {
    // locales: ["en", "fa"], // used in URL path prefix
    vueI18n: "./i18n.config.ts",
    defaultLocale: "en", // default locale of your project for Nuxt pages and routings
    strategy: "prefix_except_default", //https://v8.i18n.nuxtjs.org/guide/routing-strategies
    // lazy: true,
    langDir: "locales",
    locales: [
      {
        code: "en",
        file: "en_US.ts",
      },
      {
        code: "fa",
        file: "fa_IR.ts",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
      alwaysRedirect: true,
      cookieCrossOrigin: true,
    },
  },
  // tailwindcss: {
  //   config: {
  //     content: [
  //       "presets/**/*.{js,vue,ts}"
  //     ],
  //     theme: {
  //       extend: {
  //         colors: {
  //           "primary-50": "rgb(var(--primary-50))",
  //           "primary-100": "rgb(var(--primary-100))",
  //           "primary-200": "rgb(var(--primary-200))",
  //           "primary-300": "rgb(var(--primary-300))",
  //           "primary-400": "rgb(var(--primary-400))",
  //           "primary-500": "rgb(var(--primary-500))",
  //           "primary-600": "rgb(var(--primary-600))",
  //           "primary-700": "rgb(var(--primary-700))",
  //           "primary-800": "rgb(var(--primary-800))",
  //           "primary-900": "rgb(var(--primary-900))",
  //           "primary-950": "rgb(var(--primary-950))",
  //           "surface-0": "rgb(var(--surface-0))",
  //           "surface-50": "rgb(var(--surface-50))",
  //           "surface-100": "rgb(var(--surface-100))",
  //           "surface-200": "rgb(var(--surface-200))",
  //           "surface-300": "rgb(var(--surface-300))",
  //           "surface-400": "rgb(var(--surface-400))",
  //           "surface-500": "rgb(var(--surface-500))",
  //           "surface-600": "rgb(var(--surface-600))",
  //           "surface-700": "rgb(var(--surface-700))",
  //           "surface-800": "rgb(var(--surface-800))",
  //           "surface-900": "rgb(var(--surface-900))",
  //           "surface-950": "rgb(var(--surface-950))",
  //         },
  //       },
  //     },
  //   }
  // },
  css: [
    // "primevue/resources/themes/lara-dark-teal/theme.css",
    // "primevue/resources/themes/lara-dark-indigo/theme.css",
    // "primevue/resources/themes/bootstrap4-dark-blue/theme.css",
    // "primevue/resources/themes/bootstrap4-light-blue/theme.css",
    // "primevue/resources/themes/md-light-deeppurple/theme.css",
    // "primevue/resources/primevue.min.css",
    // "primeflex/primeflex.css",
    // "primeflex/themes/primeone-light.css",   
    // "primeflex/themes/primeone-dark.css",
    "primeicons/primeicons.css",
    "@/assets/main.css",
  ],
  build: {
    // transpile: ["primevue", "socket"],
  },
  // vite: {
  //   define: {
  //     "process.env.DEBUG": false,
  //   },
  // },
})