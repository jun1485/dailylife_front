import styled from 'styled-components';

import CommentIcon from '../../../../Icons/commentIcon';
import LikeIcon from '../../../../Icons/likeIcon';

function ModalSocial(props) {
  const { replyList } = props;
  return (
    <ModalSocialWrapper>
      <div className="social-icons-container">
        <LikeIcon />
        <CommentIcon />
      </div>
      <div className="social-count-container">
        <span className="likes-count">
          좋아요 {10}개
        </span>
        <span className="comments-count">
          댓글 {replyList.length}개
        </span>
      </div>
    </ModalSocialWrapper>
  );
}

export default ModalSocial;

const ModalSocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
