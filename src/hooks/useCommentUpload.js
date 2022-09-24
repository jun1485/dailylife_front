import axios from 'axios';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCommentDate } from 'common/utils';
import { updateReplyList } from 'reducers/comment';

function useCommentUpload(props) {
  const dispatch = useDispatch();
  const { replyList } = useSelector((state) => state.comment);
  const { currentPostData } = props;
  const replyInput = useRef();

  function addCommentProcess(e) {
    if (localStorage.getItem('accessToken')) {
      if (sessionStorage.getItem('replyInfo') === null) {
        // 댓글 업로드
        axios
          .post(
            `${process.env.REACT_APP_HOST}/api/reply/insert`,
            {
              boardNum: currentPostData.boardNum,
              replyContext: e.target.value,
            },
            {
              headers: {
                'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
              },
            },
          )
          .then((res) => {
            e.target.value = '';
            console.log(getCommentDate(res.data.replyTime));
            res.data.replyTime = getCommentDate(res.data.replyTime);
            dispatch(updateReplyList([...replyList, res.data]));
          })
          .catch((err) => console.log(err));
      } else {
        const [replyNum, replyUserName] = sessionStorage
          .getItem('replyInfo')
          .split(',');
        const replyContext = replyInput.current.value.replace(
          replyUserName,
          '',
        );
        // 대댓글 업로드
        axios
          .post(
            `${process.env.REACT_APP_HOST}/api/replyReply/insert`,
            {
              replyNum,
              replyReplyContext: replyContext,
            },
            {
              headers: {
                'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
              },
            },
          )
          .then((res) => {
            axios
              .get(
                `${process.env.REACT_APP_HOST}/api/replyReply/getReply/${res.data.replyNum}`,
                {
                  headers: {
                    'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
                  },
                },
              )
              .then((reReplyRes) => {
                const newReplyList = [...replyList];
                const idx = newReplyList.findIndex(
                  (item) => item.replyNum === res.data.replyNum,
                );
                newReplyList[idx].reReply = reReplyRes.data;
                replyInput.current.value = '';
                sessionStorage.removeItem('replyInfo');
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
    } else {
      e.target.value = '';
      alert('로그인 후 이용해주세요.');
    }
  }
  return { addCommentProcess };
}
export default useCommentUpload;
