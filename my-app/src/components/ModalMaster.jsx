import React from 'react';
import ReactDOM from 'react-dom';

const ModalMaster = ({ title, content, onClose, isOpen, buttonText }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  
  return ReactDOM.createPortal(
        <div className="modal" onClick={handleModalClick}>
          <div className="modal__content" onClick={handleModalClick}>
            <div className='modal__titleContainer'>
              <h2 className='modal__titleText'>{title}</h2>
            </div>

            <div className='modal__contentContainer'>
              <p className='modal__contentText'>{content}</p>
            </div>
            
            <div className='modal__buttonContainer'>
              <button className='modal__buttonStyle' onClick={onClose}>{buttonText}</button>
            </div>
          </div>
        </div>,
    document.getElementById('modal-root')
  );
};

export default ModalMaster;
