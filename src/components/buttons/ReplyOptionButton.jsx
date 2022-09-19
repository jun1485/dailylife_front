import styled from 'styled-components';

function ReplyOptionButton({
  setReplyDeleteFlag,
}) {
  return (
    <ReplyOption
      onClick={() => {
        setReplyDeleteFlag((prevState) => !prevState)
      }}
    >
      <svg
        aria-label="댓글 옵션"
        className="_ab6-"
        color="#8e8e8e"
        fill="#8e8e8e"
        width="30"
        height="30"
        role="img"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="6" cy="12" r="1.5" />
        <circle cx="18" cy="12" r="1.5" />
      </svg>
    </ReplyOption>
  );
}

export default ReplyOptionButton;
const ReplyOption = styled.span.attrs({
  className: 'reply-option',
})`
  background: none;
  border: none;
  vertical-align: top;
  cursor: pointer;
  margin-left: 5px;

  & > .replyDelete-btn {
    display: inline;
  }
`;
