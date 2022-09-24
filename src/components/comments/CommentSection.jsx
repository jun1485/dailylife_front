import { useState } from 'react';
import { useSelector } from 'react-redux';

import Comment from 'components/comments/Comment';


function CommentSection() {
  const { replyList } = useSelector(state => state.comment);
  const [replyHover, setReplyHover] = useState(-1);

  return (
    <div className="comment-section">
      {replyList.map((item, index) => (
        <Comment
          key={item.replyNum}
          replyHover={replyHover}
          setReplyHover={setReplyHover}
          replyList={replyList}
          index={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default CommentSection;
