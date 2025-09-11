// PopupModal.jsx
import React from 'react';

function PopupModal({ content, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default PopupModal;
