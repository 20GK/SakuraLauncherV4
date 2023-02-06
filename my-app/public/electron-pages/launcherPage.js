const { BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

function CreateMainWindow(){
  const mainWindow = new BrowserWindow({
    title: "SakuraLauncher",
    resizable: false, maximizable: false,
    fullscreen: false, fullscreenable: false,
    frame: false,
    width: 1015, height: 650,
    webPreferences: { nodeIntegration: true, contextIsolation: false, enableRemoteModule: true }
  });

  mainWindow.setBackgroundColor('#2F3136')
  
  if(isDev) {
    console.log('[SL] Development Build | LauncherPage.js');
    mainWindow.loadURL('http://localhost:3000')
  } else if (!isDev) {
    console.log('[SL] Production Build | LauncherPage.js');
    mainWindow.loadURL(`${app.getAppPath()}\\build\\index.html`)
   
  }
}


module.exports = { CreateMainWindow }