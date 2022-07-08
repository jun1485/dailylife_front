import { useEffect, useState } from "react";
import "./PostModal.css";

function PostModal(props) {
  // const [postInfo, setPostInfo] = useState("");

  // useEffect(() => {
  //   setPostInfo(props.text);
  // });
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
          <h1>{props.text}</h1>
          <div>{props.underInfo}</div>
          <br />
        </div>
      </div>
    </>
  );
}

export default PostModal;
