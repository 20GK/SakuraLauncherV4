import msmc, { wrapError } from "msmc";
import { Client, Authenticator } from "minecraft-launcher-core";
const launcher = new Client();//We're simple setting up mclc here...
const auth = new msmc.auth(); //Spawn a new auth object using mojang's token

const runVersion = (version, callback = () => {}) => {
  auth.on('load', console.log)

  async function LaunchOpts() {
    try{

      const xbx = await auth.launch('raw')
      const mc = await xbx.getMinecraft()

      let opts = {
        clientPackage: null,

        authorization: mc.mclc(),
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

      console.log('Starting!')
      launcher.launch(opts)

      launcher.on('debug', callback)
      launcher.on('data', callback)
    } catch (e) {
      console.log(wrapError(e))
    }
  }
  LaunchOpts()
}

module.exports = {runVersion}