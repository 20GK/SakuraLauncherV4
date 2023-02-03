import React, { Component, useState } from 'react'
const { ipcRenderer } = window.require('electron')
import sidebar from './SideBar.jsx'

export default class HeaderApp extends Component {
  constructor(props) {
    super(props)

    this.handleMinimizeApp = this.handleMinimizeApp.bind(this)
    this.handleCloseApp = this.handleCloseApp.bind(this)
    this.handleMenuApp = this.handleMenuApp.bind(this)
  }

  handleMinimizeApp() {
    ipcRenderer.send('minimizeApp')
  }
  handleCloseApp() {
    ipcRenderer.send('closeApp')
  }
  handleMenuApp() {
    sidebar.state.height('350px')
  }

  render() {
    return (
      <div className="header">
        <div className="header-leftmenu-container">
          <h3>Меню</h3>
          <button className="header-button-left" id="sidebarInteract" onClick={this.handleMenuApp}></button>
        </div>
        <h1 className="header-title">Sakura Project</h1>
        <div className="header-buttons-container">
          <button className="header-button-minimize" id="minimizeButton" onClick={this.handleMinimizeApp}></button>
          <button className="header-button-exit" id="exitButton" onClick={this.handleCloseApp}></button>
        </div>
      </div>
    )
  }
}