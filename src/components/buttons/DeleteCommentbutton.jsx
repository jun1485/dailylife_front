import axios from 'axios';

function DeleteCommentButton(props) {
    const {
        replyList,
        setReplyList,
        setReplyDeleteFlag,
        replyDeleteFlag,
    } = props;
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
            .then(() => {
                const idx = replyList.findIndex(
                    (item) => item.replyNum === replyNum,
                );
                const newReplyList = [...replyList];
                newReplyList.splice(idx, 1);
                setReplyList(newReplyList);
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
                                replyDeleteHandler(
                                    replyDeleteFlag,
                                );
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

export default DeleteCommentButton;
