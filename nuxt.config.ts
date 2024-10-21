// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/soft-ui-dashboard.css", "~/assets/css/nucleo-icons.css"],
  // css: ['~/assets/css/soft-ui-dashboard.css','~/assets/css/nucleo-svg.css','~/assets/css/nucleo-icons.css'],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
        },
      ],
      script: [{ src: "https://kit.fontawesome.com/42d5adcbca.js" }],
    },
  },
});
