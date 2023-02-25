import React from 'react';
import ReactDOM from 'react-dom';

const ModalMaster = ({ title, content, onClose, buttonText }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__content">
        <div className='modal__titleContainer'>
          <h2 className='modal__titleText'>{title}</h2>
        </div>

        <div className='modal__contentContainer'>
          <p className='modal__contentText'>{content}</p>
        </div>
        
        <div className='modal__buttonContainer'>
          <button className='modal__buttonStyle' onClick={onClose}>{buttonText}</button>
          <button className='modal__buttonStyle' onClick={onClose}>Пошел нахуй</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default ModalMaster;
