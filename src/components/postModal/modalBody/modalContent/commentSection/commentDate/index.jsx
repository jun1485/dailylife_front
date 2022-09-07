import { useState } from 'react';
import styled from 'styled-components';

function CommentDate() {
  const [replyHover, setReplyHover] =
    useState(-1);
  const [replyDeleteFlag, setReplyDeleteFlag] =
    useState('');
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
      </span>
    </CommentDateContainer>
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
