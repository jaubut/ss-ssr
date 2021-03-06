module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'saintescene',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'le site web de l&apos;église sainte scene' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css?family=Barlow|Germania+One', rel: 'stylesheet' }
    ],
    script: [
      { src: 'https://static.airtable.com/js/embed/embed_snippet_v1.js' },
      { src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js' },
      { src: 'https://connect.facebook.net/fr_CA/sdk.js#xfbml=1&version=v2.12&appId=1515670032095765&autoLogAppEvents=1' }
    ]
  },
  css: [
    '~/css/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#A50E2F',
    height: '5px'
  },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '48043325',
        webvisor: true,
        clickmap: true,
        useCDN: true,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ]
  ],
  generate: {
    fallback: true
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://saintescene.com',
    cacheTime: 1000 * 60 * 15,
    generate: true
  },
  manifest: {
    name: 'Sainte Scène',
    lang: 'fr'
  },
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~/plugins/vuecarousel.js', '~/plugins/vueclickoutside.js', '~/plugins/contentful.js', '~/plugins/component-hero.js', '~/plugins/v-img.js']
}
