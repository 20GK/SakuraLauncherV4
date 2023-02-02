import React, { Component } from 'react'
import background1 from '../../../images/Industrial_Craft_2_Mod_Screenshots_6.jpg'
import background2 from '../../../images/04.jpg'

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

    if(this.props.bkg === '1') { this.bkg = background1 } 
    else if (this.props.bkg === '2') { this.bkg = background2}

    return (
      <div className="server-card-1" style={{backgroundImage: `url(${this.bkg})`, gridRow: `${this.props.row}`, gridColumn: `${this.props.column}`}}>
        <span>{this.props.nameServer}</span>
        <div className="server-card-footer">
          <button className={this.styleButton} id={this.idLaunch}> {this.nameBtn} </button>
        </div>
      </div>
    )
  }
}

