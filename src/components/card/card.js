import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostModal from "../postModal/PostModal";
import Searching from "../search/Searching";
import CardItem from "./cardItem";
import "./Cards.css";

function Cards(props) {
  const cardData = useSelector((state) => state.post);
  const renderData = useSelector((state) => state.searchResult);
  return (
    <div className="cards">
      <Searching cardData={cardData} />
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            {renderData.map((data, i) => {
              return (
                <CardItem
                  key={data.id}
                  id={data.id}
                  src={data.serverFileUrl}
                  title={data.title}
                  content={data.content}
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
