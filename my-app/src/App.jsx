import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <div class="mainView">
      <div class="header">
        <div class="header-leftmenu-container">
          <h3>Меню</h3>
          <button class="header-button-left" id="sidebarInteract"></button>
        </div>
        <h1 class="header-title">Sakura Project</h1>
        <div class="header-buttons-container">
          <button class="header-button-minimize" id="minimizeButton"></button>
          <button class="header-button-exit" id="exitButton"></button>
        </div>
      </div>
      <div class="content">
        <div class="sidebar" id="sidebarMenu">
          <button title="Сервера" id="btnServers" class="btnServers"></button>
          <button title="Друзья"  id="btnFriends" class="btnFriends"></button>
          <button title="Ваш профиль" id="btnProfile" class="btnProfile"></button>
          <button title="Настройки" id="btnSettings" class="btnSettings"></button>
          <button title="Выйти из аккаунта" id="btnExitAccount" class="btnExitAccount"></button>
        </div>
        <div class="servers">
          
        </div>
      </div>
    </div>
, document.getElementById('root'))