import { useSelector } from 'react-redux/es/exports';
import styled from 'styled-components';

import ModalBody from './modalBody';

import './postModal.css';

function PostModal(props) {
  const { modalOpacity, setModalOpacity } = props;
  console.log('executes PostModal');
  const currentPostData = useSelector(
    (state) => state.selectedPostData,
  );

  return (
    <div className="container">
      <ModalWindow
        modalOpacity={modalOpacity}
        id="open-modal"
      >
        <ModalBody
          currentPostData={currentPostData}
          setModalOpacity={setModalOpacity}
        />
      </ModalWindow>
    </div>
  );
}

export default PostModal;

const ModalWindow = styled.div.attrs({
  className: 'ModalWindow',
})`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: visible;
  opacity: ${(props) => props.modalOpacity};
  pointer-events: ${(props) =>
    props.modalOpacity === 0 ? 'none' : 'auto'};
  transition: all 0.3s;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  & > div {
    border-radius: 1rem;
  }
`;
