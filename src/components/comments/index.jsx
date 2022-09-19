import { useSelector } from 'react-redux';


import CommentCreate from './commentCreate';
import CommentSection from './commentSection';

import ModalSocial from 'components/postModal/modalBody/modalContent/modalSocial';
import useComments from 'hooks/useComments';

function Comments() {
    const currentPostData = useSelector(
        (state) => state.selectedPostData,
    );
    const { replyList, setReplyList, reReplyFlag, dateHandler } =
        useComments(currentPostData.boardNum);

    return (
        <div className="comments-wrapper">
            {/* 좋아요 댓글 갯수 출력하는 코드 */}
            <ModalSocial replyList={replyList} />
            <hr />
            {/* 댓글 창 시작 */}
            <CommentSection
                replyList={replyList}
                setReplyList={setReplyList}
                reReplyFlag={reReplyFlag}
                currentPostData={currentPostData}
            />
            {/* 댓글 작성칸 */}
            <CommentCreate
                replyList={replyList}
                setReplyList={setReplyList}
                dateHandler={dateHandler}
                currentPostData={currentPostData}
            />
        </div>
    );
}

export default Comments;
