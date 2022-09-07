import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postActions } from '../../reducers/post';
import PostModal from '../postModal/PostModal';
import CardItem from './cardItem';
import './Cards.css';

function Cards() {
  console.log('executes Cards');
  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.post);
  const [modalOpacity, setModalOpacity] = useState(0);
  useEffect(() => {
    console.log('rendered Cards');
    axios
      .get(`${process.env.REACT_APP_HOST}/api/board/getBoard`, {
        headers: {
          'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
        },
      })
      .then((res) => {
        console.log('postActions.updateIems: Card');
        console.log(res.data);
        dispatch(postActions.updateItems(res.data));
      })
      .catch((res) => {
        console.log(res);
      });
  }, [modalOpacity]);

  return (
    <div className="cards">
      {/* <Searching cardData={cardData} /> */}
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
                path={data.path}
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
