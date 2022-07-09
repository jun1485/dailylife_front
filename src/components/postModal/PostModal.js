import "./PostModal.css";
import { useSelector } from "react-redux/es/exports";

function PostModal(props) {
  const currentPostData = useSelector((state) => state.selectedPostData);
  const modal = document.querySelector(".modal-inside");

  return (
    <>
      <div className="container">
        <div className="interior"></div>
        <div
          id="open-modal"
          onClick={(event) => {
            window.location.href = "#";
            // window.addEventListener("click", function (e) {
            //   if (e.target !== modal) window.location.href = "#";
            // });
            window.addEventListener("click", function (e) {
              if (e.target === modal) console.log("asd");
            });
          }}
          className="modal-window"
        >
          <div className="modal-inside">
            <a href="#" title="Close" className="modal-close">
              Close
            </a>
            <div className="modal-src-container">
              <img src={currentPostData.src} alt={"postSrc"} />
            </div>
            <h1>{currentPostData.text}</h1>
            <div>{currentPostData.underInfo}</div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostModal;
