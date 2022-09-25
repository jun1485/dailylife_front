import { url } from 'inspector';
import styled from 'styled-components';

export default function WarningModal() {
  return (
    <div className="warning-modal-container">
      <WarningIcon />
      <WarningInfo>로그인을 실패했습니다. </WarningInfo>
      <WarningExplain>
        계정의 아이디 또는 비밀번호가 맞는지 다시 확인해 주세요.
      </WarningExplain>
    </div>
  );
}

const WarningIcon = styled.div`
  width: 44px;
  height: 44px;
  margin: auto;
  background-image: url('/assets/error_icon.png');
`;

const WarningInfo = styled.div`
  padding: 1vh 0 0 0;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 19px;
  color: #3e3e3e;
`;

const WarningExplain = styled.div`
  margin: auto;
  width: 75%;
  padding: 1vh 0 0 0;
`;
