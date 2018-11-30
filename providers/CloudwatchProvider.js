'use strict'

const { ServiceProvider } = use('@adonisjs/fold') // eslint-disable-line
const Cloudwatch = require('../drivers/Cloudwatch')

class CloudwatchProvider extends ServiceProvider {
  register () {
    this.app.extend('Adonis/Src/Logger', 'cloudwatch', () => {
      return new Cloudwatch()
    })
  }
}

module.exports = CloudwatchProvider
