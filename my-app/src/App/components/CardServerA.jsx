import React, { Component } from 'react'

export default class CardServerA extends Component {
  render() {
    if(this.props.startAllow === 't') {
      this.nameBtn = 'Запустить'
      this.styleButton = 'server-card-button-start'
      this.idLaunch = 'gameLaunch1'
    } else if (this.props.startAllow === 'f') {
      this.nameBtn = 'Недоступно'
      this.styleButton = 'server-card-button-close'
      this.idLaunch = 'none'
    }



    return (
      <div className="server-card-1">
        <span>Industrial 1.12.2</span>
        <div className="server-card-footer">
          <button className={this.styleButton} id={this.idLaunch}> {this.nameBtn} </button>
        </div>
      </div>
    )
  }
}

