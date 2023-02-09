import React from 'react';

import '../styles/NotFoundPage.scss'

const NotFoundPage = () => {
  return (
    <div className='NFP-content'>
      <div className='NFP-textContainer'>
        <h1 className='NFP-text'>Извините, страничка не найдена :c</h1>
      </div>
      <div className='NFP-image'></div>
    </div>
  );
};

export {NotFoundPage};