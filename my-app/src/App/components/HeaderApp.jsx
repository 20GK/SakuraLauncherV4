import React, { useState, useEffect} from 'react'
//const { ipcRenderer } = window.require('electron')

export default function HeaderApp() {
  let [time, setTime] = useState('*Time Initialize...*')

  function TimeDisplay() {
    setTimeout(() => {
      let currentTime = new Date()

      let hour = currentTime.getHours();
      let minute = currentTime.getMinutes();
      let second = currentTime.getSeconds();

      if(hour   < 10 ) { hour   = `0${hour}`  }
      if(minute < 10 ) { minute = `0${minute}`}
      if(second < 10 ) { second = `0${second}`}

      setTime(`${hour}:${minute}:${second}`)
    }, 1000);
  }

  useEffect(() => {
    TimeDisplay()
  })

  return (
    <div className="header">
      <h1 className="header-title">Sakura Project | {time} </h1>
      <h1 className="header-title-page">Список серверов</h1>
      <div className="header-buttons-container">
        <button className="header-button-minimize" id="minimizeButton"></button>
        <button className="header-button-exit" id="exitButton"></button>
      </div>
    </div>
  )
}