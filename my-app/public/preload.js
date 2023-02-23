const { ipcRenderer, contextBridge } = require('electron')

window.onload = () => {
  console.log('preload loaded')

  contextBridge.exposeInMainWorld('api', {
    closeApp: () => ipcRenderer.invoke('ipc-closeApp'),
    minimizeApp: () => ipcRenderer.invoke('ipc-minimizeApp'),
    getVersionApp: () => ipcRenderer.invoke('ipc-versionApp')



    // closeApp: (channel, listener) => {
    //   ipcRenderer.invoke(channel, (event, args) => listener(args))
    // },

    // minimizeApp: (channel, listener) => {
    //   ipcRenderer.invoke(channel, (event, args) => listener(args))
    // },

    // getVervionApp: (channel, listener) => {
    //   ipcRenderer.on(channel, (event, args) => listener(args))
    // },

    // getGameLogs: (channel, listener) => {
    //   ipcRenderer.on(channel, (event, args) => listener(args))
    // },

    // launchGame: (channel, listener) => {
    //   ipcRenderer.on(channel, (event, args) => listener(args))
    // }
  })
}