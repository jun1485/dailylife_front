import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PostModal from "../postModal/PostModal";
import Searching from "../search/Searching";
import CardItem from "./cardItem";
import "./Cards.css";

function Cards(props) {
  // const searchResultData = useSelector((state) => state.searchResult);
  const cardData = useSelector((state) => state.post);

  console.log(props);
  return (
    <div className="cards">
      <Searching cardData={cardData} />
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            {/* {cardData.myValues.map((data, i) => { */}
            {cardData.myValues.map((data, i) => {
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
