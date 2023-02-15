const { Client, Authenticator } = require("minecraft-launcher-core")
const launcher = new Client()
const msmc = require("msmc")
//const fetch = require('node-fetch')

const runVersion = (version, callback = () => {}) => {
  
  //msmc.setFetch(fetch)
  msmc.fastLaunch('raw',
    (update) => {
      //console.log('callback!!!!!')
      //console.log(update)
    }).then(result => {
      if(msmc.errorCheck(result)){
        //console.log(result.reason)
        return
      }

      let opts = {
        clientPackage: null,

        authorization: msmc.getMCLC().getAuth(result),
        root: './sakuraProjectGame',

        version: {
          number: version,
          type: 'release'
        },

        memory: {
          max: '8000',
          min: '2000'
        },

        customLaunchArgs: [
          "-XX:+UnlockExperimentalVMOptions",
          "-XX:+UseG1GC",
          "-XX:G1NewSizePercent=20",
          "-XX:G1ReservePercent=20",
          "-XX:MaxGCPauseMillis=50",
          "-XX:G1HeapRegionSize=32M",
          '-Dfml.ignorePatchDiscrepancies=true',
          '-Dfml.ignoreInvalidMinecraftCertificates=true',
          '-XX:HeapDumpPath=MojangTricksIntelDriversForPerformance_javaw.exe_minecraft.exe.heapdump',
        ],

        overrides: {
          detached: false,
        },
      }

      console.log('Starting!')
      launcher.launch(opts)

      //launcher.on('debug', callback)
      launcher.on('data', console.log)
      //launcher.on('progress', console.log)
    }).catch(reason => {
      console.log("We failed to log someone in because : " + reason)
    })
}

module.exports = {runVersion}