import React from 'react'
import bkg1 from '../images/bkg1.jpg'
import bkg2 from '../images/bkg2.jpg'
import bkg3 from '../images/bkg3.jpg'
import bkg4 from '../images/bkg4.png'
import bkg5 from '../images/bkg5.png'
import bkg6 from '../images/bkg6.jpg'
import bkg7 from '../images/bkg7.png'
import bkg8 from '../images/bkg8.jpg'
import bkg9 from '../images/bkg9.png'

export default function CardServerA(props) {
  let setBkg
  if (props.id === "1") { setBkg = bkg1 }
  else if (props.id === "2") { setBkg = bkg2 }
  else if (props.id === "3") { setBkg = bkg3 }
  else if (props.id === "4") { setBkg = bkg4 }
  else if (props.id === "5") { setBkg = bkg5 }
  else if (props.id === "6") { setBkg = bkg6 }
  else if (props.id === "7") { setBkg = bkg7 }
  else if (props.id === "8") { setBkg = bkg8 }
  else if (props.id === "9") { setBkg = bkg9 }

  let Allow; let SetName
  if(props.allow === 't') { Allow = 'server-card-button-start'; SetName = 'Запустить' }
  else { Allow = 'server-card-button-close'; SetName = 'Недоступно'}

  
  return (
    <div className="server-card-1" style={{backgroundImage: `url(${setBkg})`, gridRow: `${props.row}`, gridColumn: `${props.column}`}}>
      <span>{props.nameServer}</span>
      <div className="server-card-footer">
        <button className={Allow}>{SetName}</button>
      </div>
    </div>
  )
}

