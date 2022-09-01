import styled from 'styled-components';

function LoginBtn() {
  return <LoginButton>로그인</LoginButton>;
}

const LoginButton = styled.button`
  margin-top: 30px;
  padding: 13px;
  width: 100%;
  text-transform: uppercase;
  outline: 0;
  background: linear-gradient(91.5deg, #fcc400 0%, #f1a027 100%);
  border: 0;
  border-radius: 4px;
  color: #ffffff;
  -webkit-transition: all 0.3 ease;
  transition: all 0.1s ease-out;
  cursor: pointer;

  font-weight: 500;
  font-size: 17px;
  letter-spacing: 0.03em;

  &:hover,
  :active,
  :focus {
    background-color: rgb(252, 65, 96);
  }
`;

export default LoginBtn;
