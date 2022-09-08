import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';

import AvatarIcon from '../../../../Icons/avatarIcon';

function CommentCreate({
  dateHandler,
  currentPostData,
  replyList,
  setReplyList,
}) {
  const replyInput = useRef();

  /** 댓글, 대댓글 작성 api 통신 함수 */
  function addComment(e) {
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
    if (
      e.target.value === '' &&
      sessionStorage.length
    ) {
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
          if (
            window.event.keyCode === 13 &&
            e.target.value !== ''
          )
            addComment(e);
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
