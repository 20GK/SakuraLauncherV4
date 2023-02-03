import React, { Component } from 'react'
//const { ipcRenderer } = window.require('electron')

export default class HeaderApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: '0px'
    }
  }

  render() {
    return (
      <div className="sidebar" id="sidebarMenu" style={{height: `${this.height}`}}>
      </div>
    )
  }
}