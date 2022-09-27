import axios from 'axios';
import { useAppSelector, useAppDispatch } from 'store/hooks';

import { updateReplyList } from 'reducers/comment';

function DeleteCommentPopup(props) {
  const dispatch = useAppDispatch();
  // const { replyList } = useSelector((state) => state.comment);
  const { replyList } = useAppSelector((state) => state.comment);
  const { setReplyDeleteFlag, replyDeleteFlag } = props;
  const handleDeleteComment = (replyNum: number) => {
    axios
      .delete(`${process.env.REACT_APP_HOST}/api/reply/delete/${replyNum}`, {
        headers: {
          'X-ACCESS-TOKEN': localStorage.getItem('accessToken')!,
        },
      })
      .then(() => {
        const idx = replyList.findIndex(
          (item: { replyNum: number }) => item.replyNum === replyNum,
        );
        const newReplyList = [...replyList];
        newReplyList.splice(idx, 1);
        dispatch(updateReplyList(newReplyList));
        setReplyDeleteFlag(-1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="reply-delete-modal">
      <div className="reply-delete-container">
        <div className="reply-delete-box">
          <div>
            <button
              type="button"
              onClick={() => {
                handleDeleteComment(replyDeleteFlag);
              }}
            >
              삭제
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                setReplyDeleteFlag(false);
              }}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteCommentPopup;
