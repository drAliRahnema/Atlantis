const baseUrl = "/";

export default defineNuxtConfig({
  head: {
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    title: "",
    meta: [
      // <meta name="description" content="">
      // { name: 'description', content: "" },
      // { name: "description", content: "" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
    ],
    bodyAttrs: {
      class: baseUrl,
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
      //   id: "custom_theme",
      //   rel: "stylesheet",
      //   href: baseUrl + "template/bootstrap4-light-blue/theme.css",
      // },
    ],
  },
  // ssr: false,
  typescript: {
    shim: false,
  },
  css: [
    // "primevue/resources/themes/bootstrap4-dark-blue/theme.css",
    // "primevue/resources/themes/bootstrap4-light-blue/theme.css",
    // "primevue/resources/themes/md-light-deeppurple/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
  ],
  build: {
    transpile: ["primevue", "socket"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: [
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
});
