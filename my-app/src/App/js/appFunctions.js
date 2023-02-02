const { ipcRenderer } = require('electron')
const ipc = ipcRenderer
const mySidebar = document.getElementById('sidebarMenu')

const buttons1  = document.getElementById('btnServers')
const buttons2  = document.getElementById('btnFriends')
const buttons3  = document.getElementById('btnSettings')
const buttons4  = document.getElementById('btnProfile')
const buttons5  = document.getElementById('btnExitAccount')
let isSidebarActive = false;

minimizeButton.addEventListener ('click', ()=>{ ipc.send('minimizeApp')      })
exitButton.addEventListener     ('click', ()=>{ ipc.send('closeApp')         })
sidebarInteract.addEventListener('click', ()=>{ 
  // ipc.send('interact-sidebar') 
  if(isSidebarActive){
    mySidebar.style.height = '0px'

    buttons1.style.width = '0px'

    buttons2.style.width = '0px'

    buttons3.style.width = '0px'

    buttons4.style.width = '0px'
    buttons5.style.width = '0px'
    isSidebarActive = false
  } else {
    mySidebar.style.height = '350px'
    buttons1.style.width = '50px'

    buttons2.style.width = '50px'

    buttons3.style.width = '50px'

    buttons4.style.width = '50px'
    
    buttons5.style.width = '50px'
    isSidebarActive = true
  }
})

launch_server_one.addEventListener('click', () => {
  ipc.send('launchone')
})