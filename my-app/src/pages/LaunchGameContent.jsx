import React from 'react';

export default function LaunchGameContent() {
  return (
    <>
      <div className='LaunchGame-content'>
        <div className='Main-content'>
          <div className='Title-Proccess'>Готовим вашу игру</div>
          <div className='Logs-Proccess'>
            <h1 className='TitleLogs-Proccess'>Журнал событий:</h1>
            <div className='Title-Proccess-2'>Его читать не обязательно ;)</div>
            <textarea readOnly={true} autoFocus={false}></textarea>
          </div>
          <div className='Progress-Bar'>
            <div className='Progress-Bar-Value'>50%</div>
          </div>
        </div>
      </div>
    </>
  );
};