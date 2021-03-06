'use strict'

const Command = use('Command')
const Config = use('Config')
const Nuxt = require('nuxt')

const alwaysDone = require('always-done')

class NuxtBuild extends Command {

  /**
   * signature defines the requirements and name
   * of command.
   *
   * @return {String}
   */
  get signature () {
    return 'nuxtbuild'
  }

  /**
   * description is the little helpful information displayed
   * on the console.
   *
   * @return {String}
   */
  get description () {
    return 'Build for production the nuxt.js application.'
  }

  /**
   * handle method is invoked automatically by ace, once your
   * command has been executed.
   *
   * @param  {Object} args    [description]
   * @param  {Object} options [description]
   */
  * handle (args, options) {
    let config = Config.get('nuxt')
    config.dev = false
    // this.nuxt = new Nuxt(config)
    // console.log('this.nuxt ==>', this.nuxt)
    // this.info('Building nuxt.js application...')
    // yield this.nuxt.build()

    // (new Nuxt(config)).then(nuxt => {
    //   this.nuxt = nuxt
    //   console.log('this.nuxt ==>', this.nuxt)
    //   this.info('Building nuxt.js application...')
    //   this.nuxt.build()
    // })

    alwaysDone(async function () {
      //console.log('config', config)
      let nuxt = await new Nuxt(config)
      await nuxt.build()
      return nuxt
    }, function done (e, res) {
      //console.log('res', res) // => 'foobar' 
      console.log('alwaysDone NuxtBuild ')
    })

  }

}

module.exports = NuxtBuild
