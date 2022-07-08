import React from "react";
import { useSelector } from "react-redux";
import PostModal from "../postModal/PostModal";
import CardItem from "./cardItem";
import "./Cards.css";

function Cards() {
  const cardData = useSelector((state) => state.post);
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            {cardData.map((data, i) => {
              return (
                <CardItem
                  key={data.id}
                  id={data.id}
                  src={data.src}
                  text={data.text}
                  underInfo={data.underInfo}
                  path={data.path}
                />
              );
            })}
            <PostModal />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
