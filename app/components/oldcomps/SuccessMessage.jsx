import React from 'react';
import '../styles/SuccessMessage.css'; // Make sure to create this CSS file

const SuccessMessage = ({ onReset }) => {
  return (
    <div className="SuccessMessageContainer">
      <div className="SuccessMessageBox">
        <p>Thanks for your message! I'll get back to you soon.</p>
        <button className="SuccessMessageButton" onClick={onReset}>Send another message</button>
      </div>
    </div>
  );
}

export default SuccessMessage;
