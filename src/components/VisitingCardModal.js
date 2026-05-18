import React from "react";

const VisitingCardModal = ({ cardImage, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img src={cardImage} alt="NovaCrest Visiting Card" className="visiting-card" />
      <div className="modal-actions">
        <a href={cardImage} download="novacrest-visitingcard.png" className="btn download-btn">
          Download
        </a>
        <button className="btn close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  </div>
);

export default VisitingCardModal;
