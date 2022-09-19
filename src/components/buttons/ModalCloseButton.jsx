import styled from 'styled-components';

import PostModalCloseButtonIcon from 'components/icons/PostModalCloseButtonIcon';

function ModalCloseButton({ setModalOpacity }) {
  return (
    <ModalClose
      title="title"
      onClick={() => {
        setModalOpacity(0);
      }}
    ><PostModalCloseButtonIcon />
    </ModalClose>
  );
}

export default ModalCloseButton;

const ModalClose = styled.div`
  position: absolute;
  top: -3.5vh;
  right: -7vh;
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
