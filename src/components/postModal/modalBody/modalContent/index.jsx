import axios from 'axios';
import { useEffect, useState } from 'react';

import CommentCreate from './commentCreate';
import CommentSection from './commentSection';
import ModalSocial from './modalSocial';
import WriterInfo from './writerInfo';

function ModalContent(props) {
  const { currentPostData, setModalOpacity } =
    props;
  const { title, content, boardNum } =
    currentPostData;
  const [replyList, setReplyList] = useState([]);
  const [reReplyFlag, setReReplyFlag] = useState(
    [],
  );
  function contentGenerator(data) {
    if (data) return data;
    const tempArr = [
      {
        id: 0,
        content: '여기는 내용부분의 영역입니다.',
      },
      {
        id: 1,
        content: '여기는 내용부분의 영역입니다.',
      },
      {
        id: 2,
        content: '여기는 내용부분의 영역입니다.',
      },
    ];
    return tempArr.map((item) => (
      <div key={item.id}>item.content</div>
    ));
  }
  /** 서버로부터 replyTime을 받아서 분/시간/일/주 같은 텍스트로 리턴 */
  const dateHandler = (replyDate) => {
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
      `${replyDate[0]}-${replyDate[1]}-${
        replyDate[2]
      } ${(replyDate[3] + 9) % 24}:${
        replyDate[4]
      }:${replyDate[5]}`,
    );
    const elapsedTime = Math.trunc(
      (today.getTime() -
        formattedDate.getTime()) /
        1000,
    );
    let elapsedText = '';

    if (elapsedTime < sec) elapsedText = '지금';
    else if (elapsedTime < min)
      elapsedText = `${elapsedTime}초`;
    else if (elapsedTime < hour)
      elapsedText = `${Math.trunc(
        elapsedTime / min,
      )}분`;
    else if (elapsedTime < day)
      elapsedText = `${Math.trunc(
        elapsedTime / hour,
      )}시간`;
    else if (elapsedTime < week)
      elapsedText = `${Math.trunc(
        elapsedTime / day,
      )}일`;
    else
      elapsedText = `${Math.trunc(
        elapsedTime / week,
      )}주`;

    return elapsedText;
  };
  /** 대댓글 열기 */
  // const getReReply = (idx) => {
  //   let tmp = [...reReplyFlag];
  //   tmp[idx] = 1 - tmp[idx];
  //   setReReplyFlag(tmp);
  // };
  /** 게시글 선택 시 replyList(댓글 정보 state) 업데이트 */
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_HOST}/api/reply/getReply/${currentPostData.boardNum}`,
        {
          headers: {
            'X-ACCESS-TOKEN':
              localStorage.getItem('accessToken'),
          },
        },
      )
      .then((res) => {
        console.log(res.data);
        res.data.map((item) =>
          dateHandler(item.replyTime),
        );
        setReplyList(res.data);
      })
      .catch((err) => console.log(err));

    /** 댓글 리스트 초기화 */
    return () => {
      setReplyList([]);
      setReReplyFlag([]);
      sessionStorage.removeItem('replyInfo');
    };
  }, [boardNum]);

  return (
    <div className="modal-content-container">
      <WriterInfo
        setModalOpacity={setModalOpacity}
      />
      <div className="modal-post-content">
        <h1 className="title-in-modal">
          {title}
        </h1>
        <div className="text-in-modal">
          {contentGenerator(content)}
          {/* <button
            className="delete-board"
            onClick={() => {
              console.log(currentPostData);
              axios
                .delete(
                  `${process.env.REACT_APP_HOST}/api/board/delete/${boardNum}`,
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
                  // console.log(res);
                  alert(
                    '게시글이 성공적으로 삭제되었습니다.',
                  );
                  setModalOpacity(0);
                  console.log(
                    '게시글이 성공적으로 삭제되었습니다.',
                  );
                  // boardDelete();

                  // window.location.href = "/";
                })
                .catch((res) => console.log(res));
            }}
          >
            글 삭제
          </button> */}
        </div>
        {/* <div className="text-in-modal">{currentPostData.content}</div> */}
      </div>
      {/* 좋아요 댓글 갯수 출력하는 코드 */}
      <ModalSocial replyList={replyList} />
      <hr />
      {/* 댓글 창 시작 */}
      <CommentSection
        replyList={replyList}
        setReplyList={setReplyList}
        dateHandler={dateHandler}
        currentPostData={currentPostData}
        reReplyFlag={reReplyFlag}
        setReReplyFlag={setReReplyFlag}
      />
      {/* 댓글 작성칸 */}
      <CommentCreate
        replyList={replyList}
        setReplyList={setReplyList}
      />
    </div>
  );
}

export default ModalContent;
