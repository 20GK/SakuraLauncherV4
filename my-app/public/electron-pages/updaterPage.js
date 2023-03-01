const { BrowserWindow, app } = require('electron');
const { autoUpdater } = require('electron-updater');
const isDev = require('electron-is-dev')

const { CreateMainWindow } = require('./launcherPage');

autoUpdater.autoDownload = false
autoUpdater.autoInstallOnAppQuit = true

function CreateUpdaterWindow() {
  const updaterWindow = new BrowserWindow({
    title: "SakuraLauncher - Updater",
    resizable: false, maximizable: false,
    fullscreen: false, fullscreenable: false,
    frame: false,
    width: 600, height: 220,
    webPreferences: { nodeIntegration: true, contextIsolation: false, enableRemoteModule: true }
  });
  
  updaterWindow.setBackgroundColor('#2F3136')
  
  if(isDev) {
    console.log('[SL] Development Build | UpdaterPage.js');
    CreateMainWindow()
    updaterWindow.loadURL(`${app.getAppPath()}\\build\\updater.html`)
    
  } else if (!isDev) {
    updaterWindow.show()
    console.log('[SL] Production Build | UpdaterPage.js');

    autoUpdater.checkForUpdates()
    updaterWindow.webContents.send('ipc-test-connect', 1)
  }

  autoUpdater.on('checking-for-update', () => {
    updaterWindow.webContents.send('ipc-checking-for-update', 1)
    updaterWindow.show()
  })

  autoUpdater.on('update-not-available', () => {
    updaterWindow.webContents.send('ipc-update-not-available', 1)
    updaterWindow.hide()
    CreateMainWindow()
  })

  autoUpdater.on('update-available', () => {
    updaterWindow.webContents.send('ipc-update-available', 1)
    autoUpdater.downloadUpdate()
  })

  autoUpdater.on('update-downloaded', () => {
    updaterWindow.webContents.send('ipc-update-downloaded', 1)
    autoUpdater.quitAndInstall()
  })
}


module.exports = { CreateUpdaterWindow }