import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { postActions } from "../store/selectedPostData";
import "../card/Cards.css";

function RecentlyItem(props) {
  const dispatch = useDispatch();

  const postData = useSelector((state) => state.selectedPostData);

  const openModal = (to) => {
    window.location.href = "#open-modal";
  };

  // like start

  const [like, setLike] = useState(0);

  const Fullheart = "/assets/full.png";

  const Emptyheart = "/assets/empty.png";

  const HandleLike = (event) => {
    event.stopPropagation();
    if (like === 0) {
      setLike(1);
    } else {
      setLike(0);
    }
  };

  // like end

  if (props.src === "") {
    return;
  } else {
    return (
      <>
        <li
          className="cards__item"
          onClick={() => {
            openModal();
            dispatch(
              postActions.updateData({
                src: props.src,
                text: props.text,
                underInfo: props.underInfo,
              })
            );
          }}
        >
          <figure className="cards__item__pic-wrap">
            <img className="cards__item__img" alt="img" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            {/* like */}
            <span onClick={HandleLike}>
              <img
                className="cards__item__like"
                src={like ? Fullheart : Emptyheart}
              />
            </span>
            <p className="cards__item__underInfo">{props.underInfo}</p>
          </div>
        </li>
      </>
    );
  }
}

export default RecentlyItem;
