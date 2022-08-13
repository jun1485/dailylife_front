import "./PostModal.css";
import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";

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

function PostModal(props) {
  const currentPostData = useSelector((state) => state.selectedPostData);

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

  return (
    <>
      <div className="container">
        <div
          id="open-modal"
          onClick={(e) => {
            window.location.href = "#home";
          }}
          className="modal-window"
        >
          <div
            className="modal-inside"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {/* 이미지는 Carousel로 교체 예정 */}
            <div
              className="modal-src-container"
              style={{
                backgroundImage: `url(https://velog.velcdn.com/images/nearworld/post/f7eaaabf-8e80-4326-a85a-c8789c8ec68a/image.png)`,
              }}
            ></div>
            <div className="modal-content-container">
              <div className="writer-info-container">
                <div className="writer-info">
                  <div className="avatar"></div>
                  <div className="username">작성자닉네임</div>
                  <button className="follow">팔로우</button>
                </div>
                <div className="modal-close-container">
                  <a href="#home" title="Close" className="modal-close">
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
                  </a>
                </div>
              </div>
              <div className="content-in-modal">
                <h1 className="title-in-modal">{currentPostData.title}</h1>
                <div className="text-in-modal">
                  {currentPostData.content
                    ? Array.from({ length: 4 }).map((item, index) => (
                        <div key={index}>여기는 내용부분의 영역입니다.</div>
                      ))
                    : null}
                </div>
                {/* <div className="text-in-modal">{currentPostData.content}</div> */}
              </div>
              {/* 좋아요 댓글 갯수 출력하는 코드 */}
              <div className="social-in-modal">
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
                  <span className="comments-count">댓글 {3}개</span>
                </div>
              </div>
              <hr />
              {/* 댓글 창 시작 */}
              <div className="comments-section">
                {tempComment.map((item, index) => (
                  <div key={index} className="comment-container">
                    <div className="comment-main">
                      <div className="avatar"></div>
                      <div className="username">홍길동</div>
                      <div className="comment-content">댓글입니다!</div>
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
                    </div>
                    <div className="comment-date-container">
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
                    </div>
                  </div>
                ))}
              </div>
              {/* 댓글 작성칸 */}
              <div className="comment-create">
                <div className="avatar"></div>
                <input
                  type="text"
                  className="comment-create-text"
                  placeholder="댓글 달기"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostModal;
