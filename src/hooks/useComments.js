import { useEffect, useState } from 'react';

import commentApi from 'apis/commentApi';

const useComments = (boardNum) => {
  const [replyList, setReplyList] = useState([]);
  const [reReplyFlag, setReReplyFlag] = useState([]);
  /** 서버로부터 replyTime을 받아서 분/시간/일/주 같은 텍스트로 리턴 */
  const dateHandler = (replyDate) => {
    console.log(replyDate);
    const [sec, min, hour, day, week] = [
      1,
      60,
      3600,
      86400,
      86400 * 7,
      2592000,
      2592000 * 12,
    ];
    const today = new Date();
    const formattedDate = new Date(
      `${replyDate[0]}-${replyDate[1]}-${replyDate[2]} ${
        (replyDate[3] + 9) % 24
      }:${replyDate[4]}:${replyDate[5]}`,
    );
    const elapsedTime = Math.trunc(
      (today.getTime() - formattedDate.getTime()) / 1000,
    );
    let elapsedText = '';

    if (elapsedTime < sec) elapsedText = '지금';
    else if (elapsedTime < min) elapsedText = `${elapsedTime}초`;
    else if (elapsedTime < hour)
      elapsedText = `${Math.trunc(elapsedTime / min)}분`;
    else if (elapsedTime < day)
      elapsedText = `${Math.trunc(elapsedTime / hour)}시간`;
    else if (elapsedTime < week)
      elapsedText = `${Math.trunc(elapsedTime / day)}일`;
    else elapsedText = `${Math.trunc(elapsedTime / week)}주`;

    return elapsedText;
  };

  /** 게시글 선택 시 replyList(댓글 정보 state) 업데이트 */
  useEffect(() => {
    if (boardNum) {
      const fetchComments = async () => {
        const { data: res } = await commentApi.getComments(boardNum);
        // res.data = [{replyTime: '1시간'}, {replyTime: '2시간'}, {replyTime: '1분'}]
        // ['1시간', '2시간', '1분']
        const updatedTimeList = res.data.map((item) => ({
          ...item,
          replyTime: dateHandler(item.replyTime),
        }));
        console.log(updatedTimeList);
        setReplyList(updatedTimeList);
      };
      fetchComments();
    }
  }, [boardNum]);

  return {
    replyList,
    setReplyList,
    reReplyFlag,
    setReReplyFlag,
    dateHandler,
  };
};

export default useComments;
