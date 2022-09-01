import styled from 'styled-components';

// props {}
function LoginInput(username, setUsername, password, setPassword) {
  return (
    <>
      <StyledInput
        type="text"
        placeholder="아이디"
        style={username ? { border: '1px solid #FCC401', color: '#1A1A1A' } : { border: '1px solid #d7d7d7' }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="비밀번호"
        autoComplete="on"
        style={password ? { border: '1px solid #FCC401', color: '#1A1A1A' } : { border: '1px solid #d7d7d7' }}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
}

export default LoginInput;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  outline: 0;
  border: 1px #d7d7d7 solid;
  border-radius: 4px;
  box-sizing: border-box;
  color: #6a6a6a;
  font-weight: 400;
  font-size: 16px;

  letter-spacing: -0.01em;

  &:nth-last-of-type(2) {
    margin-top: 6px;
  }
`;
