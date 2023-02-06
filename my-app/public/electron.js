const { 
  app, 
  ipcMain, 
  BrowserWindow,
  ipcRenderer, 
} = require('electron');

const { autoUpdater } = require('electron-updater')
const isDev = require('electron-is-dev')

require('@electron/remote/main').initialize()
//BASIC FLAGS//////////////////////////////
autoUpdater.autoDownload = false         //
autoUpdater.autoInstallOnAppQuit = true  //
///////////////////////////////////////////

const createWindow = () => {
  const updateWindow = new BrowserWindow({
    title: 'SakuraLauncher - CheckUpdate',
    resizable: false, maximizable: false,
    fullscreen: false, fullscreenable: false,
    frame: false,
    width: 600, height: 220,
    webPreferences: { nodeIntegration: true, contextIsolation: false, enableRemoteModule: true}
  })
  const mainWindow = new BrowserWindow({
    title: "SakuraLauncher",
    resizable: false, maximizable: false,
    fullscreen: false, fullscreenable: false,
    frame: false,
    width: 1015, height: 650,
    webPreferences: { nodeIntegration: true, contextIsolation: false, enableRemoteModule: true }
  });

  if(isDev) {
    console.log('[SL] Dev Build')
    mainWindow.webContents.send('asynchronous-message', {'SAVED': 'File Saved'})
    mainWindow.loadURL('http://localhost:3000')

    // updateWindow.hide()
    // mainWindow.show()

    updateWindow.show()
    mainWindow.hide()
    
    mainWindow.webContents.openDevTools();
  } 

  if (!isDev) {
    console.log('[SL] Production Build')

    updateWindow.loadURL(`${app.getAppPath()}\\build\\updater.html`)
    mainWindow.loadURL(`${app.getAppPath()}\\build\\index.html`)

    updateWindow.show()
    mainWindow.hide()

    autoUpdater.checkForUpdates()
  }

  autoUpdater.on('checking-for-update', ()=>{
    
    updateWindow.show()
    mainWindow.hide()
  })

  autoUpdater.on('update-not-available', ()=> {
    mainWindow.send(UPDATE_NOT_AVAILABLE)
    mainWindow.show()
    updateWindow.hide()
  })
  
  autoUpdater.on('update-available', ()=>{
    mainWindow.send(UPDATE_AVAILABLE)
    autoUpdater.downloadUpdate()
  })

  autoUpdater.on('update-downloaded', ()=>{
    mainWindow.send(UPDATE_DOWNLOADED)
    app.relaunch()
  })
}

/////////////////////////////////////////////////
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function() {
    if (BrowserWindow.getAllWindows().length == 0) createWindow()
  })
})

process.on('uncaughtException', function(err) {
  console.log(err)
})

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') app.quit()
})
