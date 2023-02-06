const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('cxBridge', {
  closeApp: (arg) => ipcRenderer.invoke('ipc-closeApp', arg),
  minimizeApp: (arg) => ipcRenderer.invoke('ipc-minimize', arg),
})