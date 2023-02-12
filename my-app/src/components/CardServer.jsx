import React, {useEffect, useState} from 'react';
import VanLogo from '../images/VanillaLogo.svg'
import IndLogo from '../images/IndustrialLogo.svg'
import ThMLogo from '../images/TehnoMagic.svg'

export default function CardServer(props) {
  let srcImg, descript, modList, allow;

  if(props.server.id === 1) {
    srcImg = VanLogo

    descript = `
    Да он работает, и че? Но ты не зайдешь :D
    `
  } else if (props.server.id === 2) {
    srcImg = IndLogo
    descript = `
    Почему ты это смотришь? Сервер не работает, иди гуляй
    `
  } else if (props.server.id === 3) {
    srcImg = ThMLogo
    descript = `
    Почему ты это смотришь? Сервер не работает, иди гуляй
    `
  }

  let styleServerCard;
  if(props.server.allow) {
    styleServerCard = 'cardServer'
  } else {styleServerCard = 'cardServer-notAllowed'}

  let ServerOnlineText;
  if(props.server.online === 'offline') {ServerOnlineText = 'offline'}
  else {ServerOnlineText = `${props.server.online}/100`}

  const [serverInfo, setServerInfo] = useState()

  useEffect(() => {
    setServerInfo({
      name: props.server.name,
      version: props.server.version,
      online: props.server.online,
      desc: descript,
      descModList: modList,
      allow: props.server.allow,
    })
  }, [props.server.id]);

  const renderServerPreview = (e) => {
    e.preventDefault()
    props.updateData(serverInfo)
  }

  return (
    <button onClick={renderServerPreview} className={styleServerCard}>
      <div className='cardServer-right' style={{backgroundImage: `url(${srcImg})`}}></div>
      <div className='cardServer-left'>
        <div className='cardServer-NameServer-Container'>
          <h1 className='cardServer-NameServer'>{props.server.name}</h1>
        </div>
        <div className='cardServer-left-Information'>
          <h1 className='cardServer-GameVersion'>{props.server.version}</h1>
          <h1 className='cardServer-GameOnline'>{ServerOnlineText}</h1>
        </div>
      </div>
    </button>
  );
};