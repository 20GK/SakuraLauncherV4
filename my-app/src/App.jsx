import React from 'react'
import ReactDOM from 'react-dom/client'
import CardServer from './App/components/CardServerA.jsx'
import HeaderApp from './App/components/HeaderApp.jsx'
import SideBar from './App/components/SideBar.jsx'
import './App.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="mainView">
      <HeaderApp/>
      <div className="content">
        <SideBar>
          <button title="Сервера" id="btnServers" className="btnServers"></button>
          <button title="Друзья"  id="btnFriends" className="btnFriends"></button>
          <button title="Ваш профиль" id="btnProfile" className="btnProfile"></button>
          <button title="Настройки" id="btnSettings" className="btnSettings"></button>
          <button title="Выйти из аккаунта" id="btnExitAccount" className="btnExitAccount"></button>
        </SideBar>
        <div className="servers">
          <CardServer allow='t' nameServer='Vanilla 1.19.3' row='1' column='1' id='1'/>
          <CardServer allow='t' nameServer='Industrial 1.12.2' row='1' column='2'id='2'/>
          <CardServer row='1' column='3'/>
          <CardServer row='2' column='1'/>
          <CardServer row='2' column='2'/>
          <CardServer row='2' column='3'/>
        </div>
      </div>
    </div>
  </React.StrictMode>
)