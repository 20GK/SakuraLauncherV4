const { BrowserWindow, app, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const isDev = require('electron-is-dev');

const  { CreateMainWindow }   = require('./launcherPage');

autoUpdater.autoDownload = false
autoUpdater.autoInstallOnAppQuit = true

function Log(text){ console.log(text) }

function CreateUpdaterWindow(visibility) {
  const updaterWindow = new BrowserWindow({
    title: "SakuraLauncher - Updater",
    resizable: false, maximizable: false,
    fullscreen: false, fullscreenable: false,
    frame: true,
    width: 600, height: 220,
    webPreferences: { nodeIntegration: true, contextIsolation: false, enableRemoteModule: true }
  });
  
  updaterWindow.setBackgroundColor('#2F3136')

  if(isDev) {
    console.log('[SL] Development Build | UpdaterPage.js');
    updaterWindow.hide()
    CreateMainWindow()
  } else if (!isDev) {
    updaterWindow.show()
    console.log('[SL] Production Build | UpdaterPage.js');
    updaterWindow.loadURL(`${app.getAppPath()}\\build\\updater.html`)
    autoUpdater.checkForUpdates()
  }

  autoUpdater.on('checking-for-update', () => {
    Log('Checking For Update...')
    updaterWindow.show()

    updaterWindow.webContents.send('checking-update', 'Checking Update')
  })

  autoUpdater.on('update-not-available', () => {
    Log('Update Not Available. Go to Launcher!')
    updaterWindow.hide()
    CreateMainWindow()
  })

  autoUpdater.on('update-available', () => {
    Log('Update Available. Wait. Start Download Update...')
    autoUpdater.downloadUpdate()
  })

  autoUpdater.on('update-downloaded', () => {
    Log('Update Downloaded. Please Restart')
    app.relaunch()
  })
}


module.exports = { CreateUpdaterWindow }