import { useState } from 'react';
import styled from 'styled-components';

import DeleteCommentButton from 'components/buttons/DeleteCommentbutton';
import ReplyOptionButton from 'components/buttons/ReplyOptionButton';
import useCommentHearts from 'hooks/useCommentHearts';

function CommentDate(props) {
  const {
    item,
    replyHover,
    replyList,
    setReplyList,
  } = props;
  console.log(item);
  const [replyDeleteFlag, setReplyDeleteFlag] =
    useState(false);

  const { commentHearts } = useCommentHearts(
    item.replyNum,
  );

  return (
    <CommentDateContainer>
      <span className="empty" />
      <span className="comment-date">
        {`${item.replyTime} ·  `}
        {commentHearts === 0
          ? ''
          : `좋아요: ${item.commentHearts}`}
        {' · '}
        답글 달기
        {item.subCommentCount ? (
          <span className="comment-expand">
            {` · 답글 보기 ${item.subCommentCount}개 `}
          </span>
        ) : (
          ''
        )}
        {replyHover === item.replyNum ? (
          <ReplyOptionButton
            setReplyDeleteFlag={setReplyDeleteFlag}
            replyNum={item.replyNum}
          />
        ) : (
          ''
        )}
        {replyDeleteFlag === true ? (
          <DeleteCommentButton
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
