import { app, BrowserWindow } from 'electron'
import('@electron/remote/main').initialize()

import { CreateUpdaterWindow } from './electron-pages/updaterPage'

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
