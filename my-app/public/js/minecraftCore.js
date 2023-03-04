const { Client, Authenticator } = require("minecraft-launcher-core")
const launcher = new Client()
const path = require('path')

const runVersion = (version, isDev, callback = () => {}) => {
  let opts = {
    clientPackage: null,

    authorization: Authenticator.getAuth('20GK'),
    root: isDev ? path.resolve('./.sakuraGame') : path.resolve('../../../Roaming/.sakuraGame'),

    version: {
      number: version,
      type: 'release'
    },

    server: {
      host: '135.181.126.156',
      port: '25700'
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
  launcher.on('debug', callback)
}

module.exports = {runVersion}