import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useSelector } from "react-redux";
import PostModal from "../postModal/PostModal";
import Searching from "../search/Searching";
import CardItem from "./cardItem";
import "./Cards.css";

function Cards(props) {
  const cardData = useSelector((state) => state.post);
  const renderData = useSelector((state) => state.searchResult);
  const [getPostDataFromStore, setGetPostDataFromStore] = useState(
    cardData.myValues
  );

  useEffect(() => {
    setGetPostDataFromStore(cardData.myValues);
  }, [cardData.myValues]);
  return (
    <div className="cards">
      {/* <Searching cardData={cardData} /> */}
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            {getPostDataFromStore.map((data, index) => {
              return (
                <CardItem
                  key={index}
                  id={index}
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
