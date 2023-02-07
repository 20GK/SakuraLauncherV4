const { BrowserWindow, ipcMain, app} = require('electron');
const isDev = require('electron-is-dev');
const path = require('path-browserify');
var pjson = require('../../package.json')

function CreateMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "SakuraLauncher",
    resizable: false, maximizable: false,
    fullscreen: false, fullscreenable: false,
    frame: false,
    width: 1015, height: 650,
    webPreferences: { 
      nodeIntegration: true, 
      enableRemoteModule: true,
      contextIsolation: true,
      preload: path.join(`${app.getAppPath()}\\build\\preload.js`)
    }
  });

  mainWindow.setBackgroundColor('#2F3136')
  //mainWindow.webContents.openDevTools()
  
  if(isDev) {
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

  ipcMain.handle('ipc-minimize', async () => {
    mainWindow.minimize()
  })

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('ipc-version', `v${app.getVersion()}`)
  })
}


module.exports = { CreateMainWindow }