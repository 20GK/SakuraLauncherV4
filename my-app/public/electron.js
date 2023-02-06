const { app, BrowserWindow } = require('electron');
require('@electron/remote/main').initialize()

const { CreateUpdaterWindow } = require('./electron-pages/updaterPage');

const createWindow = () => {
  CreateUpdaterWindow()
}

/////////////////////////////////////////////////
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length == 0) createWindow()
  })
})

process.on('uncaughtException', function (err) {
  console.log(err)
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') app.quit()
})
