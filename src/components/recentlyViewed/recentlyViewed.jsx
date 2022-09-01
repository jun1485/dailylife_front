import React from 'react';

import '../card/Cards.css';
import PostModal from '../postModal/PostModal';
import RecentlyItem from './recentlyItem';

function RecentlyViewed() {
  const watched = JSON.parse(localStorage.getItem('watched'));

  return (
    <div>
      <div className="cards">
        <h2>최근 본 페이지</h2>
        <div className="cards__container">
          <div className="cards__wrapper">
            <div className="cards__items">
              {watched.map((data) => (
                <RecentlyItem
                  key={1}
                  id={data.id}
                  src={data.src}
                  text={data.title}
                  underInfo={data.content}
                  path={data.path}
                />
              ))}
              <PostModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentlyViewed;
