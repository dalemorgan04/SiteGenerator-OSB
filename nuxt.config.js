const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/NuxtTest/'
        }
      }
    : {}

export default {
  routerBase,
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'nuxt-polyfill'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  // Configure polyfills:
  polyfill: {
    features: [
      /* 
          Feature without detect:

          Note: 
            This is not recommended for most polyfills
            because the polyfill will always be loaded, parsed and executed.
      */
      {
        require: 'url-polyfill' // NPM package or require path of file
      },

      /* 
          Feature with detect:

          Detection is better because the polyfill will not be 
          loaded, parsed and executed if it's not necessary.
      */
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window
      },

      /*
          Feature with detect & install:

          Some polyfills require a installation step
          Hence you could supply a install function which accepts the require result
      */
      {
        require: 'smoothscroll-polyfill',

        // Detection found in source: https://github.com/iamdustan/smoothscroll/blob/master/src/smoothscroll.js
        detect: () =>
          'scrollBehavior' in document.documentElement.style &&
          window.__forceSmoothScrollPolyfill__ !== true,

        // Optional install function called client side after the package is required:
        install: (smoothscroll) => smoothscroll.polyfill()
      }
    ]
  }
}
