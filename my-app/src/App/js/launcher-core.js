const { Client, Authenticator } = require('minecraft-launcher-core')
const launcher = new Client()

const runVersion = (checkLog, launch) => {
  let opts = {
    clientPackage: null,

    authorization: Authenticator.getAuth("20GK"),
    root: "C:/Users/Default User/AppData/Roaming/SakuraMinecraft",
    version: {
        number: "1.12.2",
        type: "release"
    },
    memory: {
      max: "6G",
      min: "2G"
  }
  }

  launcher.launch(opts);

  launcher.on('debug', (e) => console.log(e))
  launcher.on('data', (e) => console.log(e))
}

module.exports = runVersion