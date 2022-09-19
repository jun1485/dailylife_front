import { useState } from 'react';

import Comment from 'components/comments/commentSection/comment';

function CommentSection({ replyList, setReplyList, reReplyFlag }) {
  const [replyHover, setReplyHover] =
    useState(-1);

  return (
    <div className="comment-section">
      {replyList.map((item, index) => (
        <Comment
          key={item.replyNum}
          replyHover={replyHover}
          setReplyHover={setReplyHover}
          replyList={replyList}
          setReplyList={setReplyList}
          reReplyFlag={reReplyFlag}
          index={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default CommentSection;
