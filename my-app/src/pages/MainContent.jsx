import React from 'react';
import CardServer from '../components/CardServer.jsx';

export default function MainContent() {
  return (
    <div className='MainView'>

       {/* /////////////// */}
      
      <div className='left-content'>
        <div className="sideBar">
          <CardServer nameServer='Vanilla' versionGame='1.19.3' imageSrc='' onlineServer='100/100'/>
          <CardServer nameServer='Industrial Craft' versionGame='1.12.2' imageSrc='' onlineServer='100/100'/>
          <CardServer nameServer='TehnoMagic' versionGame='1.7.10' imageSrc='' onlineServer='100/100'/>
          <CardServer nameServer='Magic' versionGame='1.7.10' imageSrc='' onlineServer='100/100'/>
        </div>

        <div className="account-Card">
          <div className='account-Avatar'></div>
          <h1 className='account-Nickname'>20GK20GK20GK20GK</h1>
        </div>
      </div>

       {/* /////////////// */}

      <div className='right-content'>
        <div className='HeaderServer-Content'>

        </div>

        <div className='Description-Content'>

        </div>

        <button className='StartGame-Button'>Запустить</button>
      </div>

       {/* /////////////// */}
    </div>
  );
};