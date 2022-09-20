import styled from 'styled-components';

import LikeIcon from '../Icons/LikeIcon';

<<<<<<< HEAD:src/components/postModal/ModalSocial.jsx
import CommentIcon from 'components/Icons/CommentIcon';

=======
>>>>>>> d80a9d12fbf8de3f74b92423c3ef58505daffd81:src/components/postModal/modalBody/modalContent/modalSocial/index.jsx
function ModalSocial(props) {
  const { replyList } = props;
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
