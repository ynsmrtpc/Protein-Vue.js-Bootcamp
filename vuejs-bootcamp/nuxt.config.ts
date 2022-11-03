export default defineNuxtConfig({
  meta: {
    title: "VueJs Bootcamp",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=0",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "keywords",
      },
      {
        hid: "description",
        name: "description",
        content: "description",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
      },
    ],
    script: [],
  },

  css: ["assets/style/global.scss"],

  //   vite: {
  //     css: {
  //       preprocessorOptions: {
  //         scss: {
  //           additionalData: '@import "@/assets/style.scss";',
  //         },
  //       },
  //     },
  //   },

  //   router: {
  //     extendRoutes(routes: any) {
  //       routes.push({
  //         path: "*",
  //         redirect: "/404",
  //       });
  //     },
  //   },

  build: {},
});
