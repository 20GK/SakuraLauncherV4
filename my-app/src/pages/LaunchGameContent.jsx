import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function LaunchGameContent() {

  const locate = useLocation()

  const [versionGame, setVersionGame] = useState()
  const [logs, setLogs] = useState([])

  window.api.getLogs((event, data) => {
    setLogs([data])
  })

  useEffect(() => { 
    async function launch() {
      setVersionGame(locate.state.version)
      console.log(versionGame)
      await window.api.launchGame({version: versionGame})
    }
    launch()
  }, [])
  

  return (
    <>
      <div className='LaunchGame-content'>
        <div className='Main-content'>
          <div className='Title-Proccess'>Готовим вашу игру</div>
          <div className='Logs-Proccess'>
            <h1 className='TitleLogs-Proccess'>Журнал событий:</h1>
            <div className='Title-Proccess-2'></div>
            <textarea readOnly={true} autoFocus={false} value={logs.join('\n')}></textarea>
          </div>
          <div className='Progress-Bar'>
            <div className='Progress-Bar-Value' style={{width: `50%`}}>Че за хуйня</div>
          </div>
        </div>
      </div>
    </>
  );
};