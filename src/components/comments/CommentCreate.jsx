import { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import AvatarIcon from 'components/Icons/AvatarIcon';
import useComments from 'hooks/useComments';
import useCommentUpload from 'hooks/useCommentUpload';

function CommentCreate(props) {
  const selectedPostData = useSelector((state) => state.selectedPostData);
  const replyInput = useRef();
  const { addCommentProcess } = useCommentUpload(props);
  const { fetchComments } = useComments();

  /** 댓글, 대댓글 작성 api 통신 함수 */

  /** 대댓글 작성 */
  // const addReply = (idx) => {
  //   replyInput.current.value = `@${replyList[idx].userName} `;
  //   replyInput.current.focus();
  //   sessionStorage.setItem('replyInfo', [
  //     replyList[idx].replyNum,
  //     `@${replyList[idx].userName} `,
  //   ]);
  // };

  /** 대댓글 작성 해제 */
  const replyCheckHandler = (e) => {
    if (e.target.value === '' && sessionStorage.length) {
      sessionStorage.removeItem('replyInfo');
    }
  };

  return (
    <CommentCreateWrapper>
      <AvatarIcon />
      <input
        type="text"
        className="comment-create-text"
        ref={replyInput}
        placeholder="댓글 달기"
        onKeyUp={(e) => {
          if (window.event.keyCode === 13 && e.target.value !== '') {
            addCommentProcess(e);
            fetchComments(selectedPostData.boardNum);
          }
        }}
        onChange={(e) => {
          replyCheckHandler(e);
        }}
      />
    </CommentCreateWrapper>
  );
}

export default CommentCreate;
const CommentCreateWrapper = styled.div.attrs({
  className: 'comment-create',
})`
  & > .comment-create-text {
    border: 1px solid #dcdcdc;
    border-radius: 100px;
    width: 100%;
    margin-left: 10px;
    padding: 10px;
    font-family: 'Pretendard';
    font-size: 16px;
  }
`;
