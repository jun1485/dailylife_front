import styled from 'styled-components';

import ModalCloseButton from '../../../../buttons/ModalCloseButton';
import AvatarIcon from '../../../../Icons/avatarIcon';

import KebabMenuButton from 'components/buttons/kebabMenuButton';

function WriterInfo({ setModalOpacity }) {
  return (
    <div className="writer-info-container">
      <WriterInfoWrapper>
        <AvatarIcon />
        <Username>작성자닉네임</Username>
        <Follow>팔로우</Follow>
      </WriterInfoWrapper>
      <div className="modal-close-container">
        <KebabMenuContainer>
          <KebabMenuButton />
        </KebabMenuContainer>
        <ModalCloseButton
          setModalOpacity={setModalOpacity}
        />
      </div>
    </div>
  );
}

export default WriterInfo;

const KebabMenuContainer = styled.div`
  position: absolute;
  right: 0;
  &:hover {
    cursor: pointer;
  }
`;

const WriterInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
`;
const Follow = styled.button`
  width: 68px;
  height: 28px;
  border: none;
  border-radius: 100px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;
const Username = styled.div``;
