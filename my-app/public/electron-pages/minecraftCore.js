const MCLC = require('minecraft-launcher-core')

const { Client, Authenticator } = MCLC
const launcher = new Client()

const runVersion = (version, callback = () => {}) => {
  let opts = {
    clientPackage: null,
    authorization: Authenticator.getAuth('20GK'),
    root: './sakuraProjectGame',
    version: {
      number: version,
      type: 'release'
    },
    memory: {
      max: '6G',
      min: '4G'
    }
  }
  
  launcher.launch(opts)
  launcher.on('debug', callback)
  launcher.on('data', callback)
}

module.exports = {runVersion}