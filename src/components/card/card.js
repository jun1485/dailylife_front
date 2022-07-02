import React from "react";
import CardItem from "./cardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Daily Life</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/assets/dog1.jpg"
              text="강쥐1"
              underInfo="귀여운 강아지1"
              path="/dog1"
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
          </ul>
          <ul className="cards__items">
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
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
