import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

function CommentDate(props) {
  const {
    item,
    replyHover,
    replyList,
    setReplyList,
  } = props;
  const [replyDeleteFlag, setReplyDeleteFlag] =
    useState('');

  /** 댓글 좋아요 개수 불러오는 api 통신 함수 */
  const getReplyHeart = (replyNum) => {
    let replyHeart = 1;
    axios
      .get(
        `${process.env.REACT_APP_HOST}/api/heart/countHeartReply/${replyNum}`,
        {
          headers: {
            'X-ACCESS-TOKEN':
              localStorage.getItem('accessToken'),
          },
        },
      )
      .then((res) => {
        replyHeart = res.data;
      })
      .catch((err) => console.log(err));

    if (replyHeart === 0) return null;
    return `좋아요 ${replyHeart}`;
  };

  return (
    <CommentDateContainer>
      <span className="empty" />
      <span className="comment-date">
        {item.time} ·{' '}
        {getReplyHeart(item.replyNum) ?? ''}
        {' · '}
        답글 달기
        {item.subCommentCount ? (
          <span className="comment-expand">
            {' '}
            · 답글 보기 ({item.subCommentCount}
            개){' '}
          </span>
        ) : (
          ''
        )}
        {replyHover === item.replyNum ? (
          <ReplyOption
            onClick={() => {
              setReplyDeleteFlag(item.replyNum);
            }}
          >
            <svg
              aria-label="댓글 옵션"
              className="_ab6-"
              color="#8e8e8e"
              fill="#8e8e8e"
              width="30"
              height="30"
              role="img"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="6" cy="12" r="1.5" />
              <circle cx="18" cy="12" r="1.5" />
            </svg>
          </ReplyOption>
        ) : (
          ''
        )}
        {replyDeleteFlag !== -1 ? (
          <ReplyDeleteModal
            setReplyList={setReplyList}
            replyList={replyList}
            replyDeleteFlag={replyDeleteFlag}
            setReplyDeleteFlag={
              setReplyDeleteFlag
            }
          />
        ) : (
          ''
        )}
      </span>
    </CommentDateContainer>
  );
}

// delete 컴포넌트
function ReplyDeleteModal(props) {
  const {
    replyList,
    setReplyList,
    setReplyDeleteFlag,
    replyDeleteFlag,
  } = props;
  const replyDeleteHandler = (replyNum) => {
    axios
      .delete(
        `${process.env.REACT_APP_HOST}/api/reply/delete/${replyNum}`,
        {
          headers: {
            'X-ACCESS-TOKEN':
              localStorage.getItem('accessToken'),
          },
        },
      )
      .then(() => {
        const idx = replyList.findIndex(
          (item) => item.replyNum === replyNum,
        );
        const newReplyList = [...replyList];
        newReplyList.splice(idx, 1);
        setReplyList(newReplyList);
        setReplyDeleteFlag(-1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="reply-delete-modal">
      <div className="reply-delete-container">
        <div className="reply-delete-box">
          <div>
            <button
              type="button"
              onClick={() => {
                replyDeleteHandler(
                  replyDeleteFlag,
                );
              }}
            >
              삭제
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                setReplyDeleteFlag(-1);
              }}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentDate;
const CommentDateContainer = styled.div.attrs({
  className: '.comment-date-container',
})`
  & > .empty {
    width: 38px;
    aspect-ratio: 1;
  }
  & > .comment-date {
    margin-left: 10px;
    font-size: 13px;
    color: #848484;
  }
  & > .comment-date > .comment-expand {
    font-weight: 500;
  }
  & > .comment-sub-list {
    display: flex;
  }
`;
const ReplyOption = styled.span.attrs({
  className: 'reply-option',
})`
  background: none;
  border: none;
  vertical-align: top;
  cursor: pointer;
  margin-left: 5px;

  & > .replyDelete-btn {
    display: inline;
  }
`;
