import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import CommentCreate from './CommentCreate';
import CommentSection from './CommentSection';

import ModalSocial from 'components/postModal/ModalSocial';
import useComments from 'hooks/useComments';


function Comments() {
  const currentPostData = useSelector((state) => state.selectedPostData);
  const { dateHandler, fetchComments } = useComments();

  useEffect(() => {
    fetchComments(currentPostData.boardNum);
  }, [currentPostData.boardNum]);

  return (
    <div className="comments-wrapper">
      {/* 좋아요 댓글 갯수 출력하는 코드 */}
      <ModalSocial />
      <hr />
      {/* 댓글 창 시작 */}
      <CommentSection
        currentPostData={currentPostData}
      />
      {/* 댓글 작성칸 */}
      <CommentCreate
        dateHandler={dateHandler}
        currentPostData={currentPostData}
      />
    </div>
  );
}

export default Comments;
