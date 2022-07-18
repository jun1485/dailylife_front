import "./PostModal.css";
import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";

function PostModal(props) {
  const currentPostData = useSelector((state) => state.selectedPostData);
      // create localStorage for recentlyViewd items
      useEffect(()=>{
        if(localStorage.watched === undefined) {
          localStorage.setItem('watched', JSON.stringify([]));
        }
        let watched = JSON.parse(localStorage.getItem('watched'));
        watched.unshift(currentPostData)
        watched = [... new Set(watched)].slice(0,3)
        localStorage.setItem('watched',JSON.stringify(watched))
      },[currentPostData])
  

  return (
    <>
      <div className="container">
        <div
          id="open-modal"
          onClick={(e) => {
            window.location.href = "#home";
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
              <a href="#home" title="Close" className="modal-close">
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
