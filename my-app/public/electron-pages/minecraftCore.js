const { Client, Authenticator } = require("minecraft-launcher-core")
const launcher = new Client()
const path = require('path')

const runVersion = (version, callback = () => {}) => {
  let opts = {
    clientPackage: null,

    authorization: Authenticator.getAuth('20GK'),
    root: path.resolve('../../../Roaming/.sakuraGame'),

    version: {
      number: version,
      type: 'release'
    },

    window: {
      width: '1000',
      height: '630',
      fullscreen: false
    },

    memory: {
      max: '8000',
      min: '2000'
    },
    
    overrides: {
      detached: false,
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
    
    timeout: 60000,
  }

  console.log('Starting!')
  
  launcher.launch(opts)
  //console.log(opts)
  launcher.on('debug', callback)
  console.log(path.resolve('./sakuraProjectGame'))
  //launcher.on('data', (e) => console.log(e))
  //launcher.on('progress', callback)

}

module.exports = {runVersion}