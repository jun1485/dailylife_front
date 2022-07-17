import RecentlyItem from "./recentlyItem";
import React from "react";
import "../card/Cards.css";

function RecentlyViewed() {

    let watched = JSON.parse(localStorage.getItem('watched'))

        return (
            <>
                <div className="cards">
                    <h2>최근 본 페이지</h2>
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <div className="cards__items">
                            {watched.map((data, i) => {

                                return (
                                    <>
                                        <RecentlyItem
                                            key={i}
                                            id={data.id}
                                            src={data.src}
                                            text={data.text}
                                            underInfo={data.underInfo}
                                            path={data.path}
                                        />
                                    </>
                                );

                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    
}

export default RecentlyViewed;