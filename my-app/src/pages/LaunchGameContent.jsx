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

  async function goCloseApp() {
    await window.api.closeApp()
  }

  window.api.getLogsGame((event, data) => {
    console.log(data)
    if(data[0].includes('[MCLC]: Using Java version')){
      setLogs(['Так-с, я нашел Java'])
    } else if(data[0].includes('[MCLC]: Collected class paths')){
      setLogs(['Ищем классы и пути...'])
    } else if(data[0].includes('[MCLC]: Using ; to separate class paths')){
      setLogs(['Исправляем и загружаем нужные библиотеки'])
    } else if(data[0].includes('[MCLC]: Attempting to download assets')){
      setLogs(['Попытка загрузки ассетов'])
    } else if(data[0].includes('[MCLC]: Downloaded assets')){
      setLogs(['Ура, загружаем ассеты'])
    } else if(data[0].includes('[MCLC]: Set launch options')){
      setLogs(['Выставляем нужные шестеренки для запуска'])
    } else if(data[0].includes('[MCLC]: Launching with arguments')){
      setLogs(['Заводим двигатель, игра запускается!'])
      setTimeout(() => {
        goCloseApp()
      }, 3000);
    }
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