import ja from 'vuetify/es5/locale/ja';

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt_spotify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** build部分にはもともとeeslintの設定が書いてありますが、今回は使用しないので以下に上書きしてください。
    */
    extend(config, ctx) {
    }
  },
  /*
  ** モジュールを追加
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['@nuxtjs/vuetify',{
      lang:{
        locales:{ja},
        current:'ja'
      },
    }],
  ],


}

