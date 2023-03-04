const { ipcRenderer, contextBridge } = require('electron')

window.onload = () => {
  const api = {
    closeApp: () => ipcRenderer.invoke('ipc-closeApp'),
    minimizeApp: () => ipcRenderer.invoke('ipc-minimizeApp'),
    getVersionApp: () => ipcRenderer.invoke('ipc-getVersionApp'),
    sendLaunchGame: (args) => ipcRenderer.invoke('ipc-launchGame', args),
    getLogsGame: (callback) => ipcRenderer.on('ipc-getGameLogs', (callback)),

    responseServerStatus: (callback) => ipcRenderer.on('ipc-responseStatus', (callback))
  }

  contextBridge.exposeInMainWorld('api', api);
}