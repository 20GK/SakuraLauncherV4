const { ipcRenderer, contextBridge } = require('electron')

window.onload = () => {
  console.log('preload loaded')

  contextBridge.exposeInMainWorld('api', {
    closeApp: () => ipcRenderer.invoke('ipc-closeApp'),
    minimizeApp: () => ipcRenderer.invoke('ipc-minimizeApp'),
    getVersionApp: () => ipcRenderer.invoke('ipc-getVersionApp'),

    sendLaunchGame: (args) => ipcRenderer.invoke('ipc-launchGame', (args)),
    getLogsGame: (callback) => ipcRenderer.on('ipc-getGameLogs', (callback)),
  })
}