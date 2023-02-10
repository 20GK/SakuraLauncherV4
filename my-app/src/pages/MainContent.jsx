import React from 'react';
import CardServer from '../components/CardServer.jsx';

export default function MainContent() {
  return (
    <div className='MainView'>

       {/* /////////////// */}
      
      <div className='left-content'>
        <div className="sideBar">
          <CardServer />
          <CardServer />
          <CardServer />
          <CardServer />
          <CardServer />
          <CardServer />
          <CardServer />
          <CardServer />
        </div>

        <div className="account-Card">
          
        </div>
      </div>

       {/* /////////////// */}

      <div className='right-content'>
        <div className='HeaderServer-Content'>

        </div>

        <div className='Description-Content'>

        </div>
      </div>

       {/* /////////////// */}
    </div>
  );
};