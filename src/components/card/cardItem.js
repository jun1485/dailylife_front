import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import styled from "styled-components";
import { selectedPostActions } from "../store/selectedPostData";

const CardItemText = styled.p``;

function CardItem(props) {
  const dispatch = useDispatch();
  const openModal = (to) => {
    window.location.href = "/#open-modal";
  };
  function handleClick() {
    openModal();
    dispatch(
      selectedPostActions.updateData({
        src: props.src,
        title: props.title,
        content: props.content,
      })
    );
  }

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
      <li className="cards__item" onClick={handleClick}>
        <figure className="cards__item__pic-wrap">
          <img className="cards__item__img" alt="img" src={props.src} />
          <div className="cards__item__gradientBar" />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.title}</h5>
          {/* like */}
          <span className="cards__like__container" onClick={HandleLike}>
            <img
              className="cards__item__like"
              src={like ? Fullheart : Emptyheart}
              alt="like"
            />
          </span>
          <p className="cards__item__underInfo">{props.content}</p>
        </div>
      </li>
    </>
  );
}

export default CardItem;
