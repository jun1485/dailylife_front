import styled from 'styled-components';

import PostModalCloseButtonIcon from 'components/Icons/PostModalCloseButtonIcon';
import { updateModalStatus } from 'reducers/kebab.postModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ModalCloseButton({ setModalOpacity }) {
  const dispatch = useDispatch();
  const kebabModal = useSelector(state => state.kebabModal);
  return (
    <ModalClose
      title="title"
      onClick={() => {
        setModalOpacity(0);
        dispatch(updateModalStatus(false));
      }}
    >
      <PostModalCloseButtonIcon />
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
