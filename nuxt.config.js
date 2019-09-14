import { createApolloFetch } from 'apollo-fetch'

require('dotenv').config();

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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~/assets/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/dotenv', '@nuxtjs/apollo'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.API_URL || ''
      }
    }
  },
  generate: {
    routes: function () {
      const uri = process.env.API_URL || '';
      const apolloFetch = createApolloFetch({ uri });

      const query = `{
          entries {
            slug
          }
        }`;

      return apolloFetch({ query })
        .then(result => {
          return result.data.entries.map(movie => `/movie/${movie.slug}`);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
