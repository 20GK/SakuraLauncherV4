import React from 'react';
import VanLogo from '../images/VanillaLogo.svg'
import IndLogo from '../images/IndustrialLogo.svg'
import ThMLogo from '../images/TehnoMagic.svg'

export default function CardServer(props) {
  let srcImg;

  if(props.id === '1') {
    srcImg = VanLogo
  } else if (props.id === '2') {
    srcImg = IndLogo
  } else if (props.id === '3') {
    srcImg = ThMLogo
  }

  return (
    <button className='cardServer'>
      <div className='cardServer-right' style={{backgroundImage: `url(${srcImg})`}}></div>
      <div className='cardServer-left'>
        <div className='cardServer-NameServer-Container'>
          <h1 className='cardServer-NameServer'>{props.nameServer}</h1>
        </div>
        <div className='cardServer-left-Information'>
          <h1 className='cardServer-GameVersion'>{props.versionGame}</h1>
          <h1 className='cardServer-GameOnline'>{props.onlineServer}</h1>
        </div>
      </div>
    </button>
  );
};