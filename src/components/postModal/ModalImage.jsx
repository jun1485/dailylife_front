function ModalImage(image) {
  const deliveredData = image;
  return (
    <div
      className="modal-image"
      style={{
        backgroundImage: `url(${deliveredData.image})`,
      }}
    />
  );
}

export default ModalImage;
