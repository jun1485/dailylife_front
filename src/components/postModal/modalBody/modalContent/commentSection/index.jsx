import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

import CommentDate from './commentDate';
import CommentMain from './commentMain';

function CommentSection(props) {
  const {
    replyList,
    dateHandler,
    setReplyList,
    currentPostData,
    setReReplyFlag,
    reReplyFlag,
  } = props;
  // 오류방지 위한 임시 코드
  let temp = setReReplyFlag;
  temp = '';
  console.log(temp);

  const [replyHover, setReplyHover] =
    useState(-1);
  /** 서버로부터 댓글 정보를 받아서 replyList 상태에 저장 */
  function getReply(e) {
    if (localStorage.getItem('accessToken')) {
      axios
        .get(
          `${process.env.REACT_APP_HOST}/api/reply/getReply/${currentPostData.boardNum}`,
          {
            headers: {
              'X-ACCESS-TOKEN':
                localStorage.getItem(
                  'accessToken',
                ),
            },
          },
        )
        .then((res) => {
          e.target.value = '';
          res.data.time = dateHandler(
            res.data.replyTime,
          );
          setReplyList([...replyList, res.data]);
        })
        .catch((err) => console.log(err));
    } else {
      e.target.value = '';
      alert('로그인 후 이용해주세요.');
    }
  }
  // 오류 방지위한 임시 코드
  let temp2 = getReply;
  temp2 = '';
  console.log(temp2);

  return (
    <div className="comment-section">
      {replyList.map((item, index) => (
        <CommentContainer
          key={index.replyNum}
          onMouseOver={() => {
            setReplyHover(item.replyNum);
          }}
          onMouseOut={() => {
            setReplyHover(-1);
          }}
        >
          <CommentMain item={item} />
          <CommentDate
            item={item}
            replyHover={replyHover}
            replyList={replyList}
            setReplyList={setReplyList}
          />
          {/* 대댓글 목록 */}
          {reReplyFlag[index]
            ? item.reReply.map((data) => (
                <div
                  style={{
                    width: '100%',
                    height: '30px',
                  }}
                >
                  {data.replyReplyContext}
                </div>
              ))
            : // <ul className="comment-sub-list">
              //   <li className="comment-sub-item">
              //     <div className="avatar"></div>
              //   </li>
              // </ul>
              ''}
        </CommentContainer>
      ))}
    </div>
  );
}

export default CommentSection;

const CommentContainer = styled.div.attrs({
  className: 'comment-container',
})`
  & > .comment-date-container {
    display: flex;
  }
`;
