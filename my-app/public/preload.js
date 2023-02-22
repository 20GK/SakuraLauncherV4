const { ipcRenderer, contextBridge } = require('electron')

window.onload = () => {
  console.log('preload loaded')
  const WINDOW_API = {
    closeApp: () => ipcRenderer.invoke('ipc-closeApp'),
    minimizeApp: () => ipcRenderer.invoke('ipc-minimizeApp'),
    miniApp: (callback) => ipcRenderer.on('ipc-version', (callback)),
    getLogs: (callback) => ipcRenderer.on('ipc-logsMinecraft', (callback)),
    launchGame: (args) => ipcRenderer.invoke('ipc-LaunchGame', args),
  }
  
  contextBridge.exposeInMainWorld('api', WINDOW_API)
}