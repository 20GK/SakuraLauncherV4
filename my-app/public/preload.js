const { ipcRenderer, contextBridge } = require('electron')

const WINDOW_API = {
  closeApp: (arg) => ipcRenderer.invoke('ipc-closeApp'),
  minimizeApp: (arg) => ipcRenderer.invoke('ipc-minimizeApp'),
  miniApp: (callback) => ipcRenderer.on('ipc-version', (callback)),
}

contextBridge.exposeInMainWorld('api', WINDOW_API)