import { useState } from "react";
import { useSelector } from "react-redux";
import PostModal from "../postModal/PostModal";
import CardItem from "./cardItem";
import "./Cards.css";

function Cards(props) {
  const cardData = useSelector((state) => state.post);
  console.log("modalOpacity", props.modalOpacity);

  return (
    <div className="cards">
      {/* <Searching cardData={cardData} /> */}
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            {cardData.myValues.map((data, index) => {
              return (
                <CardItem
                  key={data.boardNum}
                  boardNum={data.boardNum}
                  src={data.serverFileUrl}
                  title={data.title}
                  content={data.content}
                  heartState={data.heart}
                  path={data.path}
                  setModalOpacity={props.setModalOpacity}
                />
              );
            })}
            <PostModal
              setModalOpacity={props.setModalOpacity}
              modalOpacity={props.modalOpacity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
