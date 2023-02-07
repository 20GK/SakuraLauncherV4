import React, { useState, useEffect} from 'react';

export default function HeaderApp() {
  let [time, setTime] = useState('00:00:00');
  let [version, setVersion] = useState('...')

  async function handleCloseApp(){
    await window.api.closeApp()
  }

  async function handleMinimizeApp(){
    await window.api.minimizeApp()
  }

  window.api.miniApp((event, data) => {
    setVersion(data)
  })


  // Functional Time Display
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
  };

  // Use Effect make don't duplicate run, only one time run
  useEffect(() => {
    TimeDisplay()
  });

  // HTML Code
  return (
    <div className="header">
      <h1 className="header-title">Sakura Project | {time} | {version}</h1>
      <div className="header-buttons-container">
        <button className="header-button-minimize" id="minimizeButton" onClick={handleMinimizeApp}></button>
        <button className="header-button-exit" id="exitButton" onClick={handleCloseApp}></button>
      </div>
    </div>
  );
};