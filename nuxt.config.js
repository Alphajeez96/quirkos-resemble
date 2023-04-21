export default {
  ssr: false,

  head: {
    title: "quirkos",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
      },
    ],
  },

  css: ["~/assets/styles/tailwind", "~/assets/styles/global.scss"],

  components: true,

  buildModules: [],

  modules: [],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },

    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
};
