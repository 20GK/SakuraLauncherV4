import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function LaunchGameContent() {

  const locate = useLocation()

  const [logs, setLogs] = useState([])

  useEffect(() => {    
    async function launch() {
      if (locate.state.version != undefined) {
        const versionGame = locate.state.version
        window.api.sendLaunchGame({versionGame: versionGame})
      }
    }

    ////
    launch()
  }, [])

  window.api.getLogsGame((event, data) => {
    setLogs([data])
  })
  

  return (
    <>
      <div className='LaunchGame-content'>
        <div className='Main-content'>
          <div className='Title-Proccess'>Готовим вашу игру</div>
          <div className='Logs-Proccess'>
            <div className='Title-Proccess-2'></div>
            <textarea readOnly={true} autoFocus={false} value={logs.join('\n')}></textarea>
          </div>
          <div className='Progress-Bar'>
            <div className='Progress-Bar-Value' style={{width: `50%`}}>50%</div>
          </div>
        </div>
      </div>
    </>
  );
};