import React from 'react';

export default function CardServer(props) {
  
  return (
    <button className='cardServer'>
      <div className='cardServer-left'>
        <div className='cardServer-NameServer-Container'>
          <h1 className='cardServer-NameServer'>{props.nameServer}</h1>
        </div>
        <div className='cardServer-left-Information'>
          <h1 className='cardServer-GameVersion'>{props.versionGame}</h1>
          <h1 className='cardServer-GameOnline'>{props.onlineServer}</h1>
        </div>
      </div>
      <div className='cardServer-right'></div>
    </button>
  );
};