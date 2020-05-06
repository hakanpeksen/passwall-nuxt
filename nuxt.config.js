export default {
  mode: 'universal',
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
  css: [{ src: '~/assets/css/main.scss', lang: 'scss' }],
  /*
     ** Plugins to load before mounting the App
     */
  plugins: [],
  /*
     ** Nuxt.js dev-modules
     */
  buildModules: [],
  /*
     ** Nuxt.js modules
     */
  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy',
    'nuxt-fontawesome'
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
  ],
  axios: {
    // baseURL: 'https://monitera-trends.appspot.com'
    baseURL: 'https://passwall-server.hakanpeksen.com'
  },

  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon'
  },
  fontawesome: {
    imports: [{
      set: '@fortawesome/free-solid-svg-icons',
      icons: ['fas']
    }]
  },
  /*
     ** Build configuration
     */
  build: {
    // postcss: {
    //     preset: {
    //         features: {
    //             customProperties: false
    //         }
    //     }
    // },
    /*
         ** You can extend webpack config here
         */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
