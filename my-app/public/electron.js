const { app, BrowserWindow }      = require('electron');
const { autoUpdater, AppUpdater } = require('electron-updater')
//const isDev                       = require('electron-is-dev')
const isDev = false
//BASIC FLAGS//////////////////////////////
autoUpdater.autoDownload = false         //
autoUpdater.autoInstallOnAppQuit = true  //
///////////////////////////////////////////

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "SakuraLauncher",
    resizable: false,
    maximizable: false,
    fullscreen: false,
    fullscreenable: false,
    frame: false,
    width: 1015,
    height: 650,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });
  mainWindow.setBackgroundColor('#2F3136')

  function launchApp () {
    if(isDev) {
      mainWindow.loadURL('http://localhost:3000')
      mainWindow.webContents.openDevTools();
      console.log('[SL] Dev Build')
    } else if (!isDev) {
      mainWindow.loadURL(`${app.getAppPath()}\\build\\index.html`)
      console.log('[SL] Production Build')
    }
  } 
  launchApp()
};


/////////////////////////////////////////////////

autoUpdater.on('checking-for-update',(info)=>{
  log.info('checking for update...')
})

autoUpdater.on('update-available',(info)=>{
  log.info('update-available')
})

autoUpdater.on('update-not-available',(info)=>{
  log.info('update-not-available')
})

autoUpdater.on('error',(er)=>{
  log.info('ERROR IN UPDATER ' + err)
})

autoUpdater.on('update-downloaded',(info)=>{
  log.info('update-available')
})

autoUpdater.on('download-progress',(progressTrack)=>{
  log.info('\n\nupdate-available')
  log.info(progressTrack)
})

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
