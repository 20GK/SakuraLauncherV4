import React from 'react'
import bkg1 from '../images/bkg1.jpg'

export default function CardServerA(props) {
  return (
    <div className="server-card-1" style={{backgroundImage: `url(${bkg1})`, gridRow: `${props.row}`, gridColumn: `${props.column}`}}>
      <span>Vanilla 1.19.3</span>
      <div className="server-card-footer">
        <button className='server-card-button-start'>Запустить</button>
      </div>
    </div>
  )
}

