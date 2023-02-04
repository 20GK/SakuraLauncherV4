const { app, BrowserWindow } = require('electron');
const isDev = false

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
  mainWindow.setBackgroundColor('#2b2f39')

  function launchApp () {
    if(isDev) {
      mainWindow.loadURL('http://localhost:3000')
      console.log('[SL] Dev Build')
    } else if (!isDev) {
      mainWindow.loadURL(`${app.getAppPath()}\\build\\index.html`)
      console.log('[SL] Production Build')
    }
  } launchApp();

  mainWindow.webContents.openDevTools();
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
})
