import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import styled from 'styled-components';

import { postActions } from '../../reducers/post';
import { selectedPostActions } from '../../reducers/selectedPostData';

function CardItem({
  boardNum,
  src,
  title,
  content,
  heartState,
  setModalOpacity,
}) {
  console.log('executes CardItem');

  const dispatch = useDispatch();
  const openModal = () => {
    setModalOpacity(1);
  };
  const handleClick = () => {
    openModal();
    dispatch(
      selectedPostActions.updateData({
        boardNum,
        src,
        title,
        content,
      }),
    );
  };

  const [like, setLike] = useState(heartState);

  const Fullheart = '/assets/fullHeart.png';
  const Emptyheart = '/assets/heart.png';

  useEffect(() => {
    async function fetchItemData() {
      const items = await axios
        .get(`${process.env.REACT_APP_HOST}/api/board/getBoard`, {
          headers: {
            'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
          },
        })
        .then((res) => res.data);

      dispatch(postActions.updateItems(items));
    }
    fetchItemData();
  }, [like]);

  const clickHeartEvent = (e) => {
    e.stopPropagation();
    setLike(!like);
    axios
      .post(
        `${process.env.REACT_APP_HOST}/api/heart/boardHeartPlus`,
        {
          boardNum,
        },
        {
          headers: {
            'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
          },
        },
      )
      .then((res) => {
        console.log('AJAX2 in CardItem', res);
      })
      .catch((res) => console.log(res));
  };

  return (
    <CardWrapper onClick={handleClick}>
      <ImgWrapper>
        <Thumbnail alt="img" src={src} />
        <GradientBar />
      </ImgWrapper>
      <CardInfo>
        <Text>{title}</Text>
        <LikeButton
          onClick={clickHeartEvent}
          src={like ? Fullheart : Emptyheart}
          alt="like"
        />
        <UnderInfo>{content}</UnderInfo>
      </CardInfo>
    </CardWrapper>
  );
}

const CardWrapper = styled.li`
  position: relative;
  /* margin: 0 2rem 3rem 0; */
  border-radius: 10px;
  width: 100%;
  /* height: 28vw; */
  aspect-ratio: 1;
  overflow: hidden;
  /* grid-area: item; */
  background-color: rgb(247, 247, 247);
  box-shadow: rgba(79, 79, 117, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  &:nth-of-type(9n + 2),
  &:nth-of-type(9n + 7) {
    grid-column: span 2;
    grid-row: span 2;
    height: 100%;
  };
`;
const GradientBar = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  opacity: 0.6;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 91.15%
  );
`;
const Thumbnail = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  object-fit: cover;
  transition: all 0.2s linear;
`;
const ImgWrapper = styled.figure`
  margin: 0 auto 0 auto;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 3vw;
`;
const CardInfo = styled.div`
  font-family: 'pretendard';
  color: #ffffff;
  cursor: pointer;
  width: 100%;
`;
const Text = styled.h5`
  position: absolute;
  width: 75%;
  color: #ffffff;
  font-size: 1.1vw;
  margin: 3vw 0 1.5vw 1vw;
  line-height: 30px;
  display: block;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  bottom: 1vw;
  color: #252e48;
  font-size: 6vw;
  margin: 7.5vw 0 5vw 0;
  line-height: 0px;
`;
const LikeButton = styled.img`
  position: absolute;
  width: 1.4vw;
  height: 1.4vw;
  bottom: 2.8vw;
  right: 0.75vw;
`;
const UnderInfo = styled.p`
  position: absolute;
  color: #ffffff;
  width: 80%;
  font-size: 0.9vw;
  cursor: pointer;
  font-family: 'pretendard';
  margin: 0vw 0vw 0vw 1vw;
  line-height: 30px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  bottom: 0.7vw;
`;
export default CardItem;
