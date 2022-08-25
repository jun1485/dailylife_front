import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./postModal.css";

const tempComment = [
  {
    id: 1,
    content: "",
    commentLike: 0,
    subCommentCount: 0,
  },
  {
    id: 2,
    content: "테스트용 댓글입니다.",
    commentLike: 3,
    subCommentCount: 2,
    subComments: [
      {
        id: 1,
      },
    ],
  },
  {
    id: 3,
    content: "",
    commentLike: 1,
    subCommentCount: 0,
  },
];

const ModalWindow = styled.div.attrs({ className: "ModalWindow" })`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: visible;
  opacity: ${(props) => props.modalOpacity};
  pointer-events: ${(props) => (props.modalOpacity === 0 ? "none" : "auto")};
  transition: all 0.3s;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  & > div {
    border-radius: 1rem;
  }
`;
const ModalBody = styled.div`
  position: absolute;
  padding: 2em;
  display: flex;
  width: 1183px;
  height: 650px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  visibility: visible;
`;

const WriterInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
`;
const Avatar = styled.div`
  border-radius: 50%;
  width: 38px;
  aspect-ratio: 1;
  background-color: purple;
`;
const Follow = styled.button`
  width: 68px;
  height: 28px;
  border: none;
  border-radius: 100px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;
const Username = styled.div``;

const ModalClose = styled.div`
  position: relative;
  margin-left: auto;
  width: 18px;
  aspect-ratio: 1;
  color: #aaa;
  text-decoration: none;
  border: 1px red solid;

  & svg {
    position: absolute;
  }
  & svg:nth-of-type(1) {
    transform: rotate(90deg);
  }
  &:hover {
    color: black;
    cursor: pointer;
  }
`;
const ModalSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CommentContainer = styled.div.attrs({
  className: "comment-container",
})`
  & > .comment-date-container {
    display: flex;
  }
`;
const CommentMain = styled.div.attrs({ className: "comment-main" })`
  & > .username {
    margin-left: 10px;
    font-weight: 600;
  }
  & > .comment-content {
    flex: 3;
    margin-left: 10px;
  }
  & > .comment-like > svg {
    width: 14.08px;
    height: 12.94px;
  }
`;
const CommentDateContainer = styled.div.attrs({
  className: ".comment-date-container",
})`
  & > .empty {
    width: 38px;
    aspect-ratio: 1;
  }
  & > .comment-date {
    margin-left: 10px;
    font-size: 13px;
    color: #848484;
  }
  & > .comment-date > .comment-expand {
    font-weight: 500;
  }
  & > .comment-sub-list {
    display: flex;
  }
`;
const CommentCreate = styled.div.attrs({ className: "comment-create" })`
  & > .comment-create-text {
    border: 1px solid #dcdcdc;
    border-radius: 100px;
    width: 100%;
    margin-left: 10px;
    padding: 10px;
    font-family: "Pretendard";
    font-size: 16px;
  }
`;
function PostModal({ modalOpacity, setModalOpacity }) {
  const currentPostData = useSelector((state) => state.selectedPostData);
  const [replyList, setReplyList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.watched === undefined) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
    let watched = JSON.parse(localStorage.getItem("watched"));
    watched.unshift(currentPostData);
    watched = [...new Set(watched.map(JSON.stringify))]
      .map(JSON.parse)
      .slice(0, 6);
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [currentPostData]);

  const boardDelete = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   boardDelete();
  // }, []);

  function replyInsertHandler(e) {
    if (localStorage.getItem("accessToken")) {
      axios
        .post(
          `${process.env.REACT_APP_HOST}/api/reply/insert`,
          {
            boardNum: currentPostData.boardNum,
            replyContext: e.target.value,
          },
          {
            headers: {
              "X-ACCESS-TOKEN": localStorage.getItem("accessToken"),
            },
          }
        )
        .then((res) => {
          e.target.value = "";
          setReplyList([...replyList, res.data]);
        })
        .catch((err) => console.log(err));
    } else {
      e.target.value = "";
      alert("로그인 후 이용해주세요.");
    }
  }

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_HOST}/api/reply/getReply/${currentPostData.boardNum}`,
        {
          headers: {
            "X-ACCESS-TOKEN": localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        setReplyList(res.data);
      })
      .catch((err) => console.log(err));

    return () => {
      setReplyList([]);
    };
  }, [currentPostData.boardNum]);

  console.log("postModal: ", modalOpacity);
  return (
    <>
      <div className="container">
        <ModalWindow modalOpacity={modalOpacity} id="open-modal">
          <ModalBody onClick={(e) => e.stopPropagation()}>
            {/* 이미지는 Carousel로 교체 예정 */}
            <div
              className="modal-image"
              style={{
                backgroundImage: `url(${currentPostData.src})`,
              }}
            ></div>
            <div className="modal-content-container">
              <div className="writer-info-container">
                <WriterInfo>
                  <Avatar />
                  <Username>작성자닉네임</Username>
                  <Follow>팔로우</Follow>
                </WriterInfo>
                <div className="modal-close-container">
                  <ModalClose
                    title="title"
                    onClick={(e) => {
                      setModalOpacity(0);
                      console.log("x clicked");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M1 1L17 17"
                        stroke="#42413C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M1 1L17 17"
                        stroke="#42413C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ModalClose>
                </div>
              </div>
              <div className="modal-content">
                <h1 className="title-in-modal">{currentPostData.title}</h1>
                <div className="text-in-modal">
                  {currentPostData.content
                    ? currentPostData.content
                    : Array.from({ length: 4 }).map((item, index) => (
                        <div key={index}>여기는 내용부분의 영역입니다.</div>
                      ))}
                  <button
                    className="delete-board"
                    onClick={() => {
                      console.log(currentPostData);
                      axios
                        .delete(
                          `${process.env.REACT_APP_HOST}/api/board/delete/${currentPostData.boardNum}`,
                          {
                            headers: {
                              "X-ACCESS-TOKEN":
                                localStorage.getItem("accessToken"),
                            },
                          }
                        )
                        .then((res) => {
                          console.log(res);
                          alert("게시글이 성공적으로 삭제되었습니다.");
                          boardDelete();
                          // window.location.href = "/";
                        })
                        .catch((res) => console.log(res));
                    }}
                  >
                    글 삭제
                  </button>
                </div>
                {/* <div className="text-in-modal">{currentPostData.content}</div> */}
              </div>
              {/* 좋아요 댓글 갯수 출력하는 코드 */}
              <ModalSocial>
                <div className="social-icons-container">
                  <span className="likes-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                    >
                      <path
                        d="M3.87499 11.625C8.37499 16.875 11 18.375 11 18.375C11 18.375 13.625 16.875 18.125 11.625C22.625 6.375 19.625 1.125 15.875 1.125C12.125 1.125 11 5.625 11 5.625C11 5.625 9.87499 1.125 6.12499 1.125C2.37499 1.125 -0.625012 6.375 3.87499 11.625Z"
                        stroke="#6A6A6A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="comments-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                    >
                      <path
                        d="M17.6525 14.8626C17.5228 14.9952 17.4233 15.1552 17.3613 15.3314C17.2993 15.5076 17.2762 15.6955 17.2937 15.8818C17.3816 16.7441 17.5482 17.5961 17.7912 18.4268C16.0475 18.0158 14.9825 17.5399 14.4987 17.2905C14.2244 17.149 13.9084 17.1155 13.6112 17.1963C12.7595 17.4275 11.8815 17.5439 11 17.5425C6.005 17.5425 2.25 13.9706 2.25 9.90747C2.25 5.84567 6.005 2.2725 11 2.2725C15.995 2.2725 19.75 5.84567 19.75 9.90747C19.75 11.7755 18.9787 13.5086 17.6525 14.8626ZM18.2687 19.8317C18.5649 19.8914 18.862 19.9462 19.16 19.9958C19.41 20.0365 19.6 19.7719 19.5012 19.5352C19.3903 19.2687 19.2885 18.9984 19.1962 18.7246L19.1925 18.7119C18.8825 17.7957 18.63 16.7421 18.5375 15.761C20.0712 14.1958 21 12.1471 21 9.90747C21 4.988 16.5225 1 11 1C5.4775 1 0.999998 4.988 0.999998 9.90747C0.999998 14.8269 5.4775 18.8149 11 18.8149C11.9904 18.8163 12.9768 18.6854 13.9337 18.4256C14.5837 18.7602 15.9825 19.3698 18.2687 19.8317Z"
                        fill="#6A6A6A"
                        stroke="#6A6A6A"
                        strokeWidth="0.4"
                      />
                    </svg>
                  </span>
                </div>
                <div className="social-count-container">
                  <span className="likes-count">좋아요 {10}개</span>
                  <span className="comments-count">
                    댓글 {replyList.length}개
                  </span>
                </div>
              </ModalSocial>
              <hr />
              {/* 댓글 창 시작 */}
              <div className="comment-section">
                {replyList.map((item, index) => (
                  <CommentContainer key={index}>
                    <CommentMain>
                      <Avatar />
                      <div className="username">홍길동</div>
                      <div className="comment-content">{item.replyContext}</div>
                      <span className="comment-like">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="20"
                          viewBox="0 0 22 20"
                          fill="none"
                        >
                          <path
                            d="M3.87499 11.625C8.37499 16.875 11 18.375 11 18.375C11 18.375 13.625 16.875 18.125 11.625C22.625 6.375 19.625 1.125 15.875 1.125C12.125 1.125 11 5.625 11 5.625C11 5.625 9.87499 1.125 6.12499 1.125C2.37499 1.125 -0.625012 6.375 3.87499 11.625Z"
                            stroke="#6A6A6A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </CommentMain>
                    <CommentDateContainer>
                      <span className="empty"></span>
                      <span className="comment-date">
                        {1}일 ·{" "}
                        {item.commentLike
                          ? "좋아요 " + item.commentLike + " ·"
                          : ""}{" "}
                        답글 달기
                        {item.subCommentCount ? (
                          <>
                            <span className="comment-expand">
                              {" "}
                              · 답글 보기 ({item.subCommentCount}개){" "}
                            </span>
                          </>
                        ) : (
                          ""
                        )}
                      </span>
                      {/* 댓글 답변목록 */}
                      {/* <ul className="comment-sub-list">
                        <li className="comment-sub-item">
                          <div className="avatar"></div>
                        </li>
                      </ul> */}
                    </CommentDateContainer>
                  </CommentContainer>
                ))}
              </div>
              {/* 댓글 작성칸 */}
              <CommentCreate>
                <Avatar />
                <input
                  type="text"
                  className="comment-create-text"
                  placeholder="댓글 달기"
                  onKeyUp={(e) => {
                    if (window.event.keyCode === 13 && e.target.value !== "")
                      replyInsertHandler(e);
                  }}
                ></input>
              </CommentCreate>
            </div>
          </ModalBody>
        </ModalWindow>
      </div>
    </>
  );
}

export default PostModal;
