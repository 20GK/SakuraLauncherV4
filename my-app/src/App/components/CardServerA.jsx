import React, { Component } from 'react'
const { ipcRenderer } = window.require('electron')
import bkg1 from '../../../images/bkg1.jpg'
import bkg2 from '../../../images/bkg2.jpg'

export default class CardServerA extends Component {

  render() {
    if(this.props.allow === 't') {
      this.nameBtn = 'Запустить'
      this.styleButton = 'server-card-button-start'
      this.idLaunch = 'gameLaunch1'
    } else {
      this.nameBtn = 'Недоступно'
      this.styleButton = 'server-card-button-close'
      this.idLaunch = 'none'
    }

    if (this.props.nameServer) { this.nameServer = this.props.nameServer }
    else { this.nameServer = 'N/A' }


    if (this.props.id === '1') { this.bkg = bkg1 }
    else if (this.props.id === '2') { this.bkg = bkg2 }

    return (
      <div className="server-card-1" style={{backgroundImage: `url(${this.bkg})`, gridRow: `${this.props.row}`, gridColumn: `${this.props.column}`}}>
        <span>{this.nameServer}</span>
        <div className="server-card-footer">
          <button className={this.styleButton} onClick={this.handleOnClick}> {this.nameBtn} </button>
        </div>
      </div>
    )
  }
}

