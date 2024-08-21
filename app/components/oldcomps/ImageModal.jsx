import '../styles/ImageModal.css'; 


const ImageModal = ({ isOpen, handleClose, imageSrc }) => {
    if (!isOpen) return null;
  
    return (
      <div className="ModalOverlay" onClick={handleClose}>
        <div className="ModalContent" onClick={e => e.stopPropagation()}>
          <img src={imageSrc} alt="Full View" />
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default ImageModal;