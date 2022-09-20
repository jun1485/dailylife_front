import styled from 'styled-components';

import CommentDate from './CommentDate';
import CommentMain from './CommentMain';
import ReplyList from './ReplyList';

function Comment({
  replyHover,
  setReplyHover,
  reReplyFlag,
  index,
  item,
}) {
  return (
    <CommentContainer
      onMouseOver={() => setReplyHover(item.replyNum)}
      onMouseOut={() => setReplyHover(-1)}
    >
      <CommentMain item={item} />
      <CommentDate
        item={item}
        replyHover={replyHover}
      />
      {/* 대댓글 목록 */}
      <ReplyList reReplyFlag={reReplyFlag} item={item} index={index} />
    </CommentContainer>
  );
}

export default Comment;

const CommentContainer = styled.div.attrs({
  className: 'comment-container',
})`
  & > .comment-date-container {
    display: flex;
  }
`;
