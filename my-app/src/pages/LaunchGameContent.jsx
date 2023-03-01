import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function LaunchGameContent() {

  const locate = useLocation()

  const [logs, setLogs] = useState([])
  const [progress, setProgress] = useState()

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
      setProgress('5%')
    } else if(data[0].includes('[MCLC]: Attempting to create root folder')){
      setLogs(['Создаем папку'])
      setProgress('15%')
    } else if(data[0].includes('[MCLC]: Parsed version from version manifest')){
      setLogs(['Ищем нужную версию майнкрафта'])
      setProgress('28%')
    } else if(data[0].includes('[MCLC]: Attempting to download Minecraft version jar')){
      setLogs(['Загружаем майнкрафт JAR ядро'])
      setProgress('42%')
    } else if(data[0].includes('[MCLC]: Downloaded version jar and wrote version json')){
      setLogs(['Нужное ядро JAR загружено'])
      setProgress('45%')
    } else if(data[0].includes('[MCLC]: Collected class paths')){
      setLogs(['Ищем классы и пути...'])
      setProgress('50%')
    } else if(data[0].includes('[MCLC]: Using ; to separate class paths')){
      setLogs(['Исправляем и загружаем нужные библиотеки'])
      setProgress('55%')
    } else if(data[0].includes('[MCLC]: Attempting to download assets')){
      setLogs(['Загружаем нужные ассеты'])
      setProgress('60%')
    } else if(data[0].includes('[MCLC]: Downloaded assets')){
      setLogs(['Ура, ассеты загрузились'])
      setProgress('65%')
    } else if(data[0].includes('[MCLC]: Set launch options')){
      setLogs(['Выставляем нужные шестеренки для запуска'])
      setProgress('90%')
    } else if(data[0].includes('[MCLC]: Launching with arguments')){
      setLogs(['Заводим двигатель, игра запускается!'])
      setProgress('100%')
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
            <div className='Progress-Bar-Value' style={{width: progress}}>{progress}</div>
          </div>
        </div>
      </div>
    </>
  );
};