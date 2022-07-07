import "./PostModal.css";

function PostModal(props) {
  return (
    <>
      <div className="container">
        <div className="interior"></div>
      </div>
      <div id="open-modal" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">
            Close
          </a>
          <h1>강아지</h1>
          <div>귀여운 강ㅇ지</div>
          <br />
        </div>
      </div>
    </>
  );
}

export default PostModal;
