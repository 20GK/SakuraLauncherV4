const { BrowserWindow, ipcMain, app} = require('electron');
const isDev = require('electron-is-dev');
const path = require('path-browserify');
const { getStatus } = require('../js/getStatusServer');
const { runVersion } = require('../js/minecraftCore');

function CreateMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "SakuraLauncher",
    frame: false,
    minWidth: 1000, minHeight: 630,
    width: 1000, height: 630,
    webPreferences: { 
      nodeIntegration: true, 
      enableRemoteModule: true,
      contextIsolation: true,
      preload: path.join(`${app.getAppPath()}\\build\\preload.js`)
    }
  });

  mainWindow.setBackgroundColor('#2B2E39')
  
  if(isDev) {
    mainWindow.webContents.once('dom-ready', () => {
      mainWindow.webContents.openDevTools()
    })
    console.log('[SL] Development Build | LauncherPage.js');
    
    mainWindow.loadURL('http://localhost:3000')
  } else if (!isDev) {
    console.log('[SL] Production Build | LauncherPage.js');
    mainWindow.loadURL(`${app.getAppPath()}\\build\\index.html`)
    mainWindow.show()
  }
  
  mainWindow.webContents.once('dom-ready', () => {

    ipcMain.handle('ipc-launchGame', (event, args) => {
      runVersion(args.versionGame, isDev, (data) => { 
        mainWindow.webContents.send('ipc-getGameLogs', [data])
      })
    })

    ipcMain.handle('ipc-closeApp', async () => {
      app.quit()
    })
  
    ipcMain.handle('ipc-minimizeApp', async () => {
      mainWindow.minimize()
    })
    
    ipcMain.handle('ipc-getVersionApp', async () => {
      return `BETA v${app.getVersion()}`
    })
  })

  function statusFNC() {
    getStatus('135.181.126.156', 25700)
    .then(status => mainWindow.webContents.send('ipc-responseStatus', status))
  }

  setInterval(statusFNC, 2000);
}


module.exports = { CreateMainWindow }