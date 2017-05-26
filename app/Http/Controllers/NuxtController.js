'use strict'

const Env = use('Env')
const Config = use('Config')
const Nuxt = require('nuxt')

const alwaysDone = require('always-done')

class NuxtController {

  constructor () {
    // let config = Config.get('nuxt')
    // config.dev = Env.get('NODE_ENV') === 'development'
    // this.nuxt = new Nuxt(config)
    // if (Env.get('NODE_ENV') === 'development') {
    //   this.nuxt.build()
    // }
    let ctx = this;
    alwaysDone(async function () {
      // let config = Config.get('nuxt')
      // config.dev = Env.get('NODE_ENV') === 'development'
      // this.nuxt = new Nuxt(config)
      // if (Env.get('NODE_ENV') === 'development') {
      //   this.nuxt.build()
      // }

      let config = Config.get('nuxt')
      config.dev = Env.get('NODE_ENV') === 'development'
      console.log('config', config)

      let nuxt = await new Nuxt(config)
      ctx.nuxt = nuxt

      if (config.dev ) { await nuxt.build()  }      
      return nuxt

    }, function done (e, res) {
      console.log('res', res) 
    })

  }

  * render (request, response) {
    this.nuxt.render(request.request, response.response)
  }
}

module.exports = new NuxtController()
