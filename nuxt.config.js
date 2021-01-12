export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "New Designers - student design agency",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The first student-run design agency in The Hague. We design and build digital interfaces for everyone."
      },
      { property: "og:image", content: "/share.png" }
    ],
    script: [
      {
        async: true,
        defer: true,
        "data-domain": "newdesigners.agency",
        src: "https://plausible.io/js/plausible.js"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  router: {
    linkActiveClass: "active-link",
    linkExactActiveClass: "exact-active-link"
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: "~/plugins/vue-tasty-burgers", mode: "client" }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/fontawesome"],

  // Check documentaion on (https://www.npmjs.com/package/@nuxtjs/fontawesome)
  fontawesome: {
    component: "Fa",
    icons: {
      solid: [
        "faMapMarkerAlt",
        "faPaperPlane",
        "faArrowLeft",
        "faFrown",
        "faBolt"
      ],
      brands: ["faInstagram", "faLinkedin", "faGithub"]
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxt/content", "nuxt-lazy-load"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        "postcss-nested": {}
      }
    }
  }
};
