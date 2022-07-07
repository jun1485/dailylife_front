import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardItem from "./cardItem";
import "./Cards.css";
import PostModal from "../postModal/PostModal";

function Cards() {
  useSelector((state) => state);
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
              src="/assets/dog1.jpg"
              text="강쥐1"
              underInfo="귀여운 강아지1"
              path="/dog2"
            />
            <CardItem
              src="/assets/갱지2.jpg"
              text="강쥐2"
              underInfo="귀여운 강아지2"
              path="/dog2"
            />
            <CardItem
              src="/assets/갱지6.jpg"
              text="강쥐3"
              underInfo="귀여운 강아지3"
              path="/dog3"
            />
            <CardItem
              src="/assets/갱지3.jpg"
              text="강쥐4"
              underInfo="귀여운 강아지4"
              path="/dog4"
            />
            <CardItem
              src="/assets/갱지4.png"
              text="강쥐5"
              underInfo="귀여운 강아지5"
              path="/dog5"
            />
            <CardItem
              src="/assets/갱지5.jpg"
              text="강쥐6"
              underInfo="귀여운 강아지6"
              path="/dog6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
