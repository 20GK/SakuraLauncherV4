const { BrowserWindow, ipcMain, app} = require('electron');
const isDev = require('electron-is-dev');
const path = require('path-browserify');
const { runVersion } = require('./minecraftCore');

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

  ipcMain.handle('ipc-closeApp', async () => {
    app.quit()
  })

  ipcMain.handle('ipc-minimizeApp', async () => {
    mainWindow.minimize()
  })

  mainWindow.webContents.once('dom-ready', () => {
    ipcMain.handle('ipc-LaunchGame', async (args) => {
      runVersion(args.version, (data)=> {
        mainWindow.webContents.send('ipc-logsMinecraft', [data])
      })
    })
  })

  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.webContents.send('ipc-version', `BETA v${app.getVersion()}`)
  })
}


module.exports = { CreateMainWindow }