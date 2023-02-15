import React from 'react';

export default function LaunchGameContent() {
  return (
    <>
      <div className='LaunchGame-content'>
        <div className='Main-content'>
          <div className='Title-Proccess'>Starting...</div>
          <div className='Logs-Proccess'>
            <h1 className='TitleLogs-Proccess'>Logs:</h1>
            <textarea></textarea>
          </div>
          <progress className='Progress-Bar'></progress>
        </div>
      </div>
    </>
  );
};