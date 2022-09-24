import styled from 'styled-components';

import KakaoIcon from 'components/Icons/KakaoIcon';

function EasyLogin() {
  return (
    <ThirdParty>
      <StyledText>간편 로그인</StyledText>
      <KakaoIcon />
    </ThirdParty>
  );
}

export default EasyLogin;

const ThirdParty = styled.div`
  margin-top: 20.25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledText = styled.span``;
