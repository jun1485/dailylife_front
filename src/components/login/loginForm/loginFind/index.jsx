import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LoginFind() {
  return (
    <LoginFindContainer>
      <FindUser>
        <Link to="/#">
          아이디 · 비밀번호 찾기
        </Link>
      </FindUser>
      <SignUp>
        <Link to="/signup">회원가입</Link>
      </SignUp>
      <Separate />
    </LoginFindContainer>
  );
}

export default LoginFind;
const LoginFindContainer = styled.div`
  margin-top: 16px;
  text-align: start;
`;
const FindUser = styled.span`
  font-weight: 400;
  font-size: 16px;

  color: #6a6a6a;
`;
const SignUp = styled.span`
  float: right;
  font-weight: 600;
  font-size: 16px;
  color: #6a6a6a;
`;
const Separate = styled.div`
  margin-top: 50px;
  border: 1px #d7d7d7 solid;
`;
