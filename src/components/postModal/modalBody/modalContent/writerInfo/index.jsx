import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import postApi from 'apis/postApi';
import ModalCloseButton from 'components/buttons/ModalCloseButton';
import AvatarIcon from 'components/icons/AvatarIcon';
import KebabMenu from 'components/icons/KebabMenu';

function WriterInfo({ setModalOpacity }) {
  const selectedPostData = useSelector(
    (state) => state.selectedPostData,
  );
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    // eslint-disable-next-line no-shadow
    setMenu((isOpen) => !isOpen);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen])

  return (
    <div className="writer-info-container">
      <WriterInfoWrapper>
        <AvatarIcon />
        <Username>작성자닉네임</Username>
        <Follow>팔로우</Follow>
      </WriterInfoWrapper>
      <div className="modal-close-container">
        <KebabMenuContainer
          onClick={() => {
            toggleMenu();
          }}
        >
          <KebabMenu />
          <KebabListContainer>
            {isOpen === true ? (
              <ul className="kebab-list-container">
                <button
                  type="button"
                  className="kebab-list-modify-button"
                >
                  수정하기
                </button>
                <button
                  type="button"
                  className="kebab-list-delete-button"
                  onClick={() => {
                    postApi.deleteBoardData(
                      selectedPostData.boardNum,
                    );
                    alert(
                      '게시글이 성공적으로 삭제되었습니다.',
                    );
                    toggleMenu(); // useEffect는 왜 못쓸까?
                    setModalOpacity(0);
                  }}
                >
                  삭제하기
                </button>
                <button
                  type="button"
                  className="kebab-list-cancel-button"
                >
                  취소
                </button>
              </ul>
            ) : null}
          </KebabListContainer>
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
  position: relative;
  right: 0;
  &:hover {
    cursor: pointer;
  }
`;

const KebabListContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 0px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
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
