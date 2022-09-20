import { useSelector } from 'react-redux';
import styled from 'styled-components';

import LikeIcon from '../Icons/LikeIcon';

import CommentIcon from 'components/Icons/CommentIcon';

function ModalSocial() {
  const replyList = useSelector(state => state.comment.replyList)
  return (
    <ModalSocialWrapper>
      <div className="social-icons-container">
        <LikeIcon />
        <CommentIcon />
      </div>
      <div className="social-count-container">
        <span className="likes-count">좋아요 {10}개</span>
        <span className="comments-count">댓글 {replyList.length}개</span>
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
