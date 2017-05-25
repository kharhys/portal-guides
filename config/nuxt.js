'use strict'

const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'YelloPages',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'YelloPages'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      },      
      {
        type: 'text/css',
        rel: 'stylesheet', 
        href: '//unpkg.com/vuetify/dist/vuetify.min.css'
      },      
      {
        type: 'text/css',
        rel: 'stylesheet', 
        href: '//fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' 
      },      
      {
        type: 'text/css',
        rel: 'stylesheet', 
        href: '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css'
      }
    ]
    // script: [
    //   {
    //     type: 'javascript',
    //     src: '//unpkg.com/jquery@3.1.1'
    //   }
    // ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Vue Plugins
  */
  plugins: ['~plugins/vuetify'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#744d82' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources')
}
