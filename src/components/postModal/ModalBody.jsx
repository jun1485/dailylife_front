import styled from 'styled-components/macro';

import ModalContent from './ModalContent';
import ModalImage from './ModalImage';

function ModalBody(props) {
  const { currentPostData, setModalOpacity } = props;
  const { src } = currentPostData;
  return (
    <ModalBodyWrapper onClick={(e) => e.stopPropagation()}>
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
  padding: 1em;
  display: flex;
  width: 1183px;
  height: 650px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  visibility: visible;
`;
