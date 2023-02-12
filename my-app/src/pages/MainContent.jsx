import React, {useState, useEffect} from 'react';
import CardServer from '../components/CardServer.jsx';

export default function MainContent() {

  const [ServerInfo, setServerInfo] = useState([
    {id: 1, name: 'Vanilla', version: '1.19.3', online: 0, allow: true},
    {id: 2, name: 'Industrial', version: '1.7.10', online: 'off', allow: false},
    {id: 3, name: 'TechnoMagic', version: '1.12.2', online: 'off', allow: false},
    {id: 3, name: 'Magic', version: '1.12.2', online: 'off', allow: false},
  ])

  const [renderServerInfo, setRenderServerInfo] = useState({})

  let StartButtonStyle, StartButtonText;
  if(renderServerInfo.allow) {
    StartButtonStyle = false; StartButtonText='Играть'
  } else { StartButtonStyle = true; StartButtonText='Недоступно'}

  return (
    <>
       {/* /////////////// */}
      <div className='left-content'>
        <div className="sideBar">
          {ServerInfo.map(post => 
            <CardServer server={post} updateData={setRenderServerInfo}/>
          )}
        </div>

        <div className="account-Card">
          <div className='account-Avatar'></div>
          <h1 className='account-Nickname'>20GK20GK20GK20GK</h1>
        </div>
      </div>

       {/* /////////////// */}

      <div className='right-content'>
        <div className='HeaderServer-Content'>
          {renderServerInfo.name}
        </div>

        <div className='Description-Content'>
          {renderServerInfo.desc}
        </div>

        <button disabled={StartButtonStyle} className='StartGame-Button'>{StartButtonText}</button>
      </div>

       {/* /////////////// */}
    </>
  );
};