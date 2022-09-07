import CommentSection from './commentSection';
import ModalSocial from './modalSocial';
import WriterInfo from './writerInfo';

function ModalContent(
  currentPostData,
  setModalOpacity,
) {
  const [title, content, boardNum] =
    currentPostData;

  function contentGenerator(data) {
    if (data) return data;

    return Array.from({
      length: 4,
    }).map((_item) => (
      <div key={_item}>
        여기는 내용부분의 영역입니다.
      </div>
    ));
  }

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
      <ModalSocial />
      <hr />
      {/* 댓글 창 시작 */}
      <CommentSection />
      {/* 댓글 작성칸 */}
    </div>
  );
}

export default ModalContent;
