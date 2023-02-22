import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function LaunchGameContent() {

  const locate = useLocation()

  const [version, setVersion] = useState(locate.state.version)
  const [progressBar, setProgressBar] = useState('posts')
  const [logs, setLogs] = useState([])

  window.api.getLogs((event, data) => {
    setLogs([data])
  })

  async function launch() {
    await window.api.launchGame({version: version})
  }
  
  
  useEffect(() => { 
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
            <div className='Progress-Bar-Value' style={{width: `50%`}}>{version}</div>
          </div>
        </div>
      </div>
    </>
  );
};