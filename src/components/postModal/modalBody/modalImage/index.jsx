function ModalImage(image) {
  return (
    <div
      className="modal-image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
}

export default ModalImage;
