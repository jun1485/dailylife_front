import axios from 'axios';
import { useRef } from 'react';

function useCommentUpload(props) {
  const {
    dateHandler,
    currentPostData,
    replyList,
    setReplyList,
  } = props;
  const replyInput = useRef();

  function addCommentProcess(e) {
    if (localStorage.getItem('accessToken')) {
      if (
        sessionStorage.getItem('replyInfo') ===
        null
      ) {
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
                'X-ACCESS-TOKEN':
                  localStorage.getItem(
                    'accessToken',
                  ),
              },
            },
          )
          .then((res) => {
            e.target.value = '';
            res.data.time = dateHandler(
              res.data.replyTime,
            );
            setReplyList([
              ...replyList,
              {
                boardNum: res.data.boardNum,
                replyContext:
                  res.data.replyContext,
                replyNum: res.data.replyNum,
                replyTime: res.data.replytime,
                time: res.data.time,
                userName: res.data.user.userName,
                userNum: res.data.user.userNum,
              },
            ]);
          })
          .catch((err) => console.log(err));
      } else {
        const [replyNum, replyUserName] =
          sessionStorage
            .getItem('replyInfo')
            .split(',');
        const replyContext =
          replyInput.current.value.replace(
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
                'X-ACCESS-TOKEN':
                  localStorage.getItem(
                    'accessToken',
                  ),
              },
            },
          )
          .then((res) => {
            axios
              .get(
                `${process.env.REACT_APP_HOST}/api/replyReply/getReply/${res.data.replyNum}`,
                {
                  headers: {
                    'X-ACCESS-TOKEN':
                      localStorage.getItem(
                        'accessToken',
                      ),
                  },
                },
              )
              .then((reReplyRes) => {
                const newReplyList = [
                  ...replyList,
                ];
                const idx =
                  newReplyList.findIndex(
                    (item) =>
                      item.replyNum ===
                      res.data.replyNum,
                  );
                newReplyList[idx].reReply =
                  reReplyRes.data;
                setReplyList(newReplyList);
                replyInput.current.value = '';
                sessionStorage.removeItem(
                  'replyInfo',
                );
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
