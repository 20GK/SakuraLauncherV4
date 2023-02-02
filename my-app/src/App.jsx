import React from 'react'
import ReactDOM from 'react-dom/client'
import CardServer from './App/components/CardServerA.jsx'
import './App.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="mainView">
      <div className="header">
        <div className="header-leftmenu-container">
          <h3>Меню</h3>
          <button className="header-button-left" id="sidebarInteract"></button>
        </div>
        <h1 className="header-title">Sakura Project</h1>
        <div className="header-buttons-container">
          <button className="header-button-minimize" id="minimizeButton"></button>
          <button className="header-button-exit" id="exitButton"></button>
        </div>
      </div>
      <div className="content">
        <div className="sidebar" id="sidebarMenu">
          <button title="Сервера" id="btnServers" className="btnServers"></button>
          <button title="Друзья"  id="btnFriends" className="btnFriends"></button>
          <button title="Ваш профиль" id="btnProfile" className="btnProfile"></button>
          <button title="Настройки" id="btnSettings" className="btnSettings"></button>
          <button title="Выйти из аккаунта" id="btnExitAccount" className="btnExitAccount"></button>
        </div>
        <div className="servers">
          <CardServer startAllow='t' nameServer='Vanilla 1.19.3' row='1' column='1' bkg='2'/>
          <CardServer startAllow='t' nameServer='Industrial 1.12.2' row='1' column='2' bkg='1'/>
          <CardServer startAllow='f' nameServer='N/A' row='1' column='3' bkg='0'/>
          <CardServer startAllow='f' nameServer='N/A' row='2' column='1' bkg='0'/>
          <CardServer startAllow='f' nameServer='N/A' row='2' column='2' bkg='0'/>
          <CardServer startAllow='f' nameServer='N/A' row='2' column='3' bkg='0'/>
        </div>
      </div>
    </div>
  </React.StrictMode>
)