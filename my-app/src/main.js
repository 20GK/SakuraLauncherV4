const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const runVersion = require('./App/js/launcher-core.js');
let ipc = ipcMain

if (require('electron-squirrel-startup')) {
  app.quit();
}

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
      contextIsolation: false,
      devTools: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });
  mainWindow.setBackgroundColor('#2b2f39')
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();

  //// INTEGRATION IPC

  //// MINIMIZE APP
  ipc.on('minimizeApp', ()=> {
    mainWindow.minimize()
  })
  //// CLOSE APP
  ipc.on('closeApp', ()=> {
    mainWindow.close()
  })

  ipc.on('launchone', ()=> {
    console.log('clicked');
    runVersion(1, 1)
  })
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});