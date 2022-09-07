import styled from 'styled-components';

import CommentDate from './commentDate';
import CommentMain from './commentMain';

function CommentSection() {
  return (
    <div className="comment-section">
      {replyList.map((item, index) => (
        <CommentContainer
          key={index}
          onMouseOver={() => {
            setReplyHover(item.replyNum);
          }}
          onMouseOut={() => {
            setReplyHover(-1);
          }}
        >
          <CommentMain />
          <CommentDate />
          {/* 대댓글 목록 */}
          {reReplyFlag[index]
            ? item.reReply.map((item, idx) => (
                <div
                  style={{
                    width: '100%',
                    height: '30px',
                  }}
                >
                  {item.replyReplyContext}
                </div>
              ))
            : // <ul className="comment-sub-list">
              //   <li className="comment-sub-item">
              //     <div className="avatar"></div>
              //   </li>
              // </ul>
              ''}
        </CommentContainer>
      ))}
    </div>
  );
}

export default CommentSection;

const CommentContainer = styled.div.attrs({
  className: 'comment-container',
})`
  & > .comment-date-container {
    display: flex;
  }
`;
