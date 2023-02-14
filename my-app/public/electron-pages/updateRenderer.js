import { ipcRenderer } from 'electron'

window.addEventListener('DOMContentLoaded', ()=>{

  ipcRenderer.on('ipc-test-connect', (msg) => {
    document.getElementById('text-message').innerHTML = 'Проверяем на обновление...'
  })

  ipcRenderer.on('ipc-update-not-available', (msg) => {
    document.getElementById('text-message').innerHTML = 'Обновлений не найдено'
  })

  ipcRenderer.on('ipc-update-available', (msg) => {
    document.getElementById('text-message').innerHTML = 'Обновление найдено, начинается скачивание...'
  })
  ipcRenderer.on('ipc-update-downloaded', (msg) => {
    document.getElementById('text-message').innerHTML = 'Обновление загружено, идет перезапуск'
  })
})