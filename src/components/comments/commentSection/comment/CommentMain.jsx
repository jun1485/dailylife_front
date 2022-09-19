import styled from 'styled-components';

/* eslint-disable import/no-unresolved */
import AvatarIcon from 'components/icons/AvatarIcon';
import LikeIcon from 'components/icons/LikeIcon';

function CommentMain({ item }) {
  return (
    <CommentMainWrapper>
      <AvatarIcon />
      <div className="username">
        {item.userName}
      </div>
      <div className="comment-content">
        {item.replyContext}
      </div>
      <LikeIcon replyNum={item.replyNum} />
    </CommentMainWrapper>
  );
}

export default CommentMain;
const CommentMainWrapper = styled.div.attrs({
  className: 'comment-main',
})`
  & > .username {
    margin-left: 10px;
    font-weight: 600;
  }
  & > .comment-content {
    flex: 3;
    margin-left: 10px;
  }
  & > .comment-like > svg {
    width: 14.08px;
    height: 12.94px;
  }
`;
