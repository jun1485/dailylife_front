import styled from 'styled-components';

function ModalCloseButton(setModalOpacity) {
  return (
    <ModalClose
      title="title"
      onClick={() => {
        setModalOpacity(0);
        console.log('x clicked');
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
  );
}

export default ModalCloseButton;

const ModalClose = styled.div`
  position: relative;
  margin-left: auto;
  width: 18px;
  aspect-ratio: 1;
  color: #aaa;
  text-decoration: none;

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
