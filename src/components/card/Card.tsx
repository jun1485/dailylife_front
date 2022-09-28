import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store/hooks';

import { postActions } from '../../reducers/post';
import PostModal from '../postModal/index';
import CardItem from './CardItem';
import './Cards.scss';

export type CardItemData = {
  boardNum?: number;
  src?: string;
  title: string;
  content: string;
  heartState: number;
  path: string;
};

export interface CardProps {
  data: CardItemData;
}

function Cards() {
  const dispatch = useDispatch();
  const cardData = useAppSelector((state) => state.post);
  const [modalOpacity, setModalOpacity] = useState<number>(0);

  useEffect(() => {
    async function fetchCards() {
      const getCards = await axios
        .get(`${process.env.REACT_APP_HOST}/api/board/getBoardNotLogin`)
        .then((res) => res.data);

      dispatch(postActions.updateItems(getCards));
    }
    fetchCards();
  }, [modalOpacity]);

  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            {cardData.myValues.map((data) => (
              <CardItem
                key={data.boardNum}
                boardNum={data.boardNum}
                src={data.serverFileUrl}
                title={data.title}
                content={data.content}
                heartState={data.heart}
                setModalOpacity={setModalOpacity}
              />
            ))}
            <PostModal
              setModalOpacity={setModalOpacity}
              modalOpacity={modalOpacity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
