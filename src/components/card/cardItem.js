import React from "react";
import { useNavigate, Link } from "react-router-dom";

function CardItem(props) {
  const openModal = (to) => {
    window.location.href = "/#" + "open-modal";
  };
  return (
    <>
      <li className="cards__item" onClick={openModal}>
        <figure className="cards__item__pic-wrap">
          <img className="cards__item__img" alt="img" src={props.src} />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
          <p className="cards__item__underInfo">{props.underInfo}</p>
        </div>
      </li>
    </>
  );
}

export default CardItem;
