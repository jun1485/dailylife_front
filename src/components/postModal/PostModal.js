import "./PostModal.css";
import { useSelector } from "react-redux/es/exports";

function PostModal(props) {
  const currentPostData = useSelector((state) => state.selectedPostData);
  const modal = document.querySelector(".modal-inside");

  return (
    <>
      <div className="container">
        <div
          id="open-modal"
          onClick={(event) => {
            window.location.href = "#";
          }}
          className="modal-window"
        >
          <div
            className="modal-inside"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal-src-container">
              <img
                className="img-in-modal"
                src={currentPostData.src}
                alt={"postSrc"}
              />
            </div>
            <div className="modal-content-container">
              <a href="#" title="Close" className="modal-close">
                Close
              </a>
              <h1 className="title-in-modal">{currentPostData.text}</h1>
              <hr />
              <div className="text-in-modal">{currentPostData.underInfo}</div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostModal;
