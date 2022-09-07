import styled from 'styled-components';

import ModalContent from './modalContent';
import ModalImage from './modalImage';

function ModalBody(
  currentPostData,
  setModalOpacity,
) {
  const { src } = currentPostData;
  return (
    <ModalBodyWrapper
      onClick={(e) => e.stopPropagation()}
    >
      {/* 이미지는 Carousel로 교체 예정 */}
      <ModalImage image={src} />
      <ModalContent
        currentPostData={currentPostData}
        setModalOpacity={setModalOpacity}
      />
    </ModalBodyWrapper>
  );
}

export default ModalBody;

const ModalBodyWrapper = styled.div`
  position: absolute;
  padding: 2em;
  display: flex;
  width: 1183px;
  height: 650px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  visibility: visible;
`;
