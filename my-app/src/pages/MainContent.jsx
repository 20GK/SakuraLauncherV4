import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import CardServer from '../components/CardServer.jsx';
import jsonServer from '../data/serversList.json'

export default function MainContent() {
  const navigate = useNavigate();
  function sendDataToLaunch() { navigate('/launch', {state:{version: renderServerInfo.version}})}
  
  const [ServerInfo, setServerInfo] = useState(JSON.parse(localStorage.getItem('serverInfo')) || {})
  const [renderServerInfo, setRenderServerInfo] = useState({})
  const [showAccount, setShowAccount] = useState(false)
  

  let StartButtonStyle, StartButtonText, StartButtonHide;
  if(renderServerInfo.allow) {
    StartButtonStyle = false; StartButtonText='Играть'; StartButtonHide='1'
  } else if (renderServerInfo.allow === undefined) { StartButtonHide='0' } 
  else { StartButtonStyle = true; StartButtonText='Недоступно'; StartButtonHide='1'}

  useEffect(() => {
    const rawImport = JSON.stringify(jsonServer.ServerList)
    if(localStorage.getItem('serverInfo') === null || undefined){
      localStorage.setItem('serverInfo', rawImport)
      window.location.reload()
      console.log('created new local storage')
    }
  }, [])

  // useEffect(() => {
  //   window.api.responseServerStatus((event, data) => {
  //     let obj = ServerInfo
  //     obj.Vanilla.serverStatus = data
  //     setServerInfo(obj)
  //   })
  // }, [renderServerInfo])
  

  return (
    <>
       {/* /////////////// */}
      <div className='left-content'>
        <div className="sideBar">
          {Object.keys(ServerInfo).map((key) => 
            <CardServer 
            key={ServerInfo[key].id}
            object={ServerInfo[key]} 
            updateData={setRenderServerInfo}
            />
          )}
        </div>

        <button className="account-Card">
          <div className='account-Avatar'></div>
          <h1 className='account-Nickname'>20GK</h1>
        </button>
      </div>

       {/* /////////////// */}

      <div className='right-content' style={{opacity: `${StartButtonHide}`}}>
        <div className='HeaderServer-Content'>
          <div className='HeaderServer-Content-Left'>
            <div>Выбранный Сервер:</div>
            <div className='NameServer-Header'>{renderServerInfo.name}</div>
          </div>
          <div className='HeaderServer-Content-Right'>
            <div>Онлайн Сервера:</div>
            <div className='OnlineServer-Header'>{renderServerInfo.online}</div>
          </div>
        </div>

        <div className='Description-Content'>
          {renderServerInfo.desc}
        </div>

        <button disabled={StartButtonStyle} style={{opacity: `${StartButtonHide}`}} className='StartGame-Button' onClick={()=>{sendDataToLaunch()}}>{StartButtonText}</button>
      </div>

       {/* /////////////// */}
    </>
  );
};