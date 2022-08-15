import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { postActions } from "../store/selectedPostData";

function CardItem(props) {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const openModal = (to) => {
    window.location.href = "/#open-modal";
  };

  // like start

  const [like, setLike] = useState(0);

  const Fullheart = "/assets/fullHeart.png";
  const Emptyheart = "/assets/heart.png";

  const HandleLike = (event) => {
    event.stopPropagation();
    if (like === 0) {
      setLike(1);
    } else {
      setLike(0);
    }
  };

  // like end

  return (
    <>
      <li
        className="cards__item"
        onClick={() => {
          openModal();
          dispatch(
            postActions.updateData({
              src: props.src,
              title: props.title,
              content: props.content,
            })
          );
        }}
      >
        <figure className="cards__item__pic-wrap">
          <img className="cards__item__img" alt="img" src={props.src} />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.title}</h5>
          {/* like */}
          <span className="cards__like__container" onClick={HandleLike}>
            <img
              className="cards__item__like"
              src={like ? Fullheart : Emptyheart}
            />
          </span>
          <p className="cards__item__underInfo">{props.content}</p>
        </div>
      </li>
    </>
  );
}

export default CardItem;
