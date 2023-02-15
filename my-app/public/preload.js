const { ipcRenderer, contextBridge } = require('electron')

window.onload = () => {
  console.log('preload loaded')
  const WINDOW_API = {
    closeApp: (arg) => ipcRenderer.invoke('ipc-closeApp'),
    minimizeApp: (arg) => ipcRenderer.invoke('ipc-minimizeApp'),
    miniApp: (callback) => ipcRenderer.on('ipc-version', (callback)),
    getLogs: (callback) => ipcRenderer.on('ipc-logsMinecraft', (callback)),
    launchGame: (arg) => ipcRenderer.invoke('ipc-LaunchGame'),
  }
  
  contextBridge.exposeInMainWorld('api', WINDOW_API)
}