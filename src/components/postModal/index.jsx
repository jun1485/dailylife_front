import axios from 'axios';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux/es/exports';
import styled from 'styled-components';

import ModalBody from './modalBody';

import './postModal.css';
// import { postActions } from '../../reducers/post';

function PostModal(
  modalOpacity,
  setModalOpacity,
) {
  console.log('executes PostModal');
  const currentPostData = useSelector(
    (state) => state.selectedPostData,
  );
  const [replyList, setReplyList] = useState([]);

  const [replyDeleteFlag, setReplyDeleteFlag] =
    useState(-1);
  const [reReplyFlag, setReReplyFlag] = useState(
    [],
  );
  const replyInput = useRef();

  /** 댓글 작성 api 통신 함수 */
  function replyInsertHandler(e) {
    if (localStorage.getItem('accessToken')) {
      axios
        .get(
          `${process.env.REACT_APP_HOST}/api/reply/getReply/${currentPostData.boardNum}`,
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
          setReplyList([...replyList, res.data]);
        })
        .catch((err) => console.log(err));
    } else {
      e.target.value = '';
      alert('로그인 후 이용해주세요.');
    }
  }

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
        res.data.map((item, idx) => {
          item.time = dateHandler(item.replyTime);
        });
        setReplyList(res.data);
      })
      .catch((err) => console.log(err));

    /** 댓글 리스트 초기화 */
    return () => {
      setReplyList([]);
      setReReplyFlag([]);
      sessionStorage.removeItem('replyInfo');
    };
  }, [currentPostData.boardNum]);

  /** 댓글이 작성된 날짜 계산 */
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
    replyDate = new Date(
      `${replyDate[0]}-${replyDate[1]}-${
        replyDate[2]
      } ${(replyDate[3] + 9) % 24}:${
        replyDate[4]
      }:${replyDate[5]}`,
    );
    const elapsedTime = Math.trunc(
      (today.getTime() - replyDate.getTime()) /
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

  /** 댓글 좋아요 개수 불러오는 api 통신 함수 */
  const getReplyHeart = (replyNum) => {
    let replyHeart = 1;
    axios
      .get(
        `${process.env.REACT_APP_HOST}/api/heart/countHeartReply/${replyNum}`,
        {
          headers: {
            'X-ACCESS-TOKEN':
              localStorage.getItem('accessToken'),
          },
        },
      )
      .then((res) => {
        replyHeart = res.data;
      })
      .catch((err) => console.log(err));

    if (replyHeart === 0) return null;
    return '좋아요 ' + replyHeart;
  };

  /** 댓글, 대댓글 작성 api 통신 함수 */
  function replyInsertHandler(e) {
    if (localStorage.getItem('accessToken')) {
      if (
        sessionStorage.getItem('replyInfo') ===
        null
      ) {
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
        axios
          .post(
            `${process.env.REACT_APP_HOST}/api/replyReply/insert`,
            {
              replyNum: replyNum,
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
                let newReplyList = [...replyList];
                let idx = newReplyList.findIndex(
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
  const reReplyInsertHandler = (idx) => {
    replyInput.current.value = `@${replyList[idx].userName} `;
    replyInput.current.focus();
    sessionStorage.setItem('replyInfo', [
      replyList[idx].replyNum,
      `@${replyList[idx].userName} `,
    ]);
  };
  /** 대댓글 작성 해제 */
  const reReplyCheckHandler = (e) => {
    if (
      e.target.value === '' &&
      sessionStorage.length
    ) {
      sessionStorage.removeItem('replyInfo');
    }
  };

  /** 대댓글 열기 */
  const getReReply = (idx) => {
    let tmp = [...reReplyFlag];
    tmp[idx] = 1 - tmp[idx];
    setReReplyFlag(tmp);
  };

  return (
    <div className="container">
      <ModalWindow
        modalOpacity={modalOpacity}
        id="open-modal"
      >
        <ModalBody
          currentPostData={currentPostData}
          setModalOpacity={setModalOpacity}
        />
        {replyDeleteFlag !== -1 ? (
          <ReplyDeleteModal
            replyDeleteNum={replyDeleteFlag}
            setReplyDeleteFlag={
              setReplyDeleteFlag
            }
          />
        ) : (
          ''
        )}
      </ModalWindow>
    </div>
  );
}

function ReplyDeleteModal(props) {
  const replyDeleteHandler = (replyNum) => {
    axios
      .delete(
        `${process.env.REACT_APP_HOST}/api/reply/delete/${replyNum}`,
        {
          headers: {
            'X-ACCESS-TOKEN':
              localStorage.getItem('accessToken'),
          },
        },
      )
      .then((res) => {
        let idx = props.replyList.findIndex(
          (item) => item.replyNum === replyNum,
        );
        let newReplyList = [...props.replyList];
        newReplyList.splice(idx, 1);
        props.setReplyList(newReplyList);
        props.setReplyDeleteFlag(-1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="reply-delete-modal">
      <div className="reply-delete-container">
        <div className="reply-delete-box">
          <div>
            <button
              onClick={() => {
                replyDeleteHandler(
                  props.replyDeleteNum,
                );
              }}
            >
              삭제
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                props.setReplyDeleteFlag(-1);
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

export default PostModal;

const ModalWindow = styled.div.attrs({
  className: 'ModalWindow',
})`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: visible;
  opacity: ${(props) => props.modalOpacity};
  pointer-events: ${(props) =>
    props.modalOpacity === 0 ? 'none' : 'auto'};
  transition: all 0.3s;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  & > div {
    border-radius: 1rem;
  }
`;
