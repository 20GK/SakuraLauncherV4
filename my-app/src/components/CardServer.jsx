import React, {useEffect, useState} from 'react';

//Images
import vanillaImage from '../images/VanillaLogo.png';
import industrialImage from '../images/Industrial.png';
import technoMagicImage from '../images/TechnoMagic.png';

const images = {
  1: vanillaImage,
  2: industrialImage,
  3: technoMagicImage,
};

export default function CardServer(props) {
  const [serverInfo, setServerInfo] = useState()
  const imageURL = images[props.object.id]
  let styleServerCard;
  

  if(props.object.serverStatus) styleServerCard = 'cardServer'
  else styleServerCard = 'cardServer-notAllowed'


  useEffect(() => {
    setServerInfo({
      name: props.object.nameServer,
      version: props.object.gameVersion,
      desc: props.object.description,
      online: props.object.serverOnline,
      allow: props.object.serverStatus,
    })
  }, [props.object.id]);

  const renderServerPreview = (e) => {
    e.preventDefault()
    props.updateData(serverInfo)
  }

  return (
    <button onClick={renderServerPreview} className={styleServerCard}>
      <div className='cardServer-right' style={{backgroundImage: `url(${imageURL})`}}></div>
      <div className='cardServer-left'>
        <div className='cardServer-NameServer-Container'>
          <h1 className='cardServer-NameServer'>{props.object.nameServer}</h1>
        </div>
        <div className='cardServer-left-Information'>
          <h1 className='cardServer-GameVersion'>{props.object.gameVersion}</h1>
          <h1 className='cardServer-GameOnline'>{props.object.serverOnline}/{props.object.serverOnlineMax}</h1>
        </div>
      </div>
    </button>
  );
};