export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  router: {
    base: "/flasky_fox/"
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
 head: {
  title: "the Fox",
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
  ],
  noscript: [
    { innerHTML: "Body No Scripts", body: true }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
},
  /*
  ** Global CSS
  */
  css: [
    "~/assets/scss/_base.scss",
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    "@aceforth/nuxt-optimized-images",
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxt/content",
    "@nuxtjs/style-resources",
    "nuxt-webfontloader",
  ],

  // Style Resources
  styleResources: {
    scss: [
      "~/assets/scss/_variables.scss",
    ]
  },

  // Web Font Loader
  webfontloader: {
    google: {
      families: ["PT+Sans&display=swap"],
    },
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
