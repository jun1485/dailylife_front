import styled from 'styled-components';

import AvatarIcon from '../../../../../Icons/avatarIcon';
import LikeIcon from '../../../../../Icons/likeIcon';

function CommentMain() {
  return (
    <CommentMainWrapper>
      <AvatarIcon />
      <div className="username">
        {item.userName}
      </div>
      <div className="comment-content">
        {item.replyContext}
      </div>
      <LikeIcon />
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
