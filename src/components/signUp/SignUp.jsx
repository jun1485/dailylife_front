// 에러처리 아직 안했음
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useForm from './useForm';

import signupFormData from 'mocks/signupFormData';

function SignUp() {
  const { handleChange, handleSubmit } = useForm({
    userId: '',
    phoneNumber: '',
    name: '',
    password: '',
    email: '',
  });

  return (
    <SignUpWrapper>
      <LoginForm action="/signin" method="POST" onSubmit={() => handleSubmit()}>
        {signupFormData.map((data) => (
          <InputInfo
            type="text"
            placeholder={data.placeholder}
            name={data.name}
            onChange={handleChange}
          />
        ))}
        <SubmitBtn type="submit">create</SubmitBtn>
        <Registered>
          Already registered?
          <Link to="/login">Login</Link>
        </Registered>
      </LoginForm>
    </SignUpWrapper>
  );
}

const Registered = styled.p``;

const SubmitBtn = styled.button`
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
  &:active,
  &:focus,
  &:hover {
    background: rgb(252, 65, 96);
  }
`;

const InputInfo = styled.input`
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
`;

const SignUpWrapper = styled.div.attrs({ className: 'SignUp' })`
  width: 360px;
  margin: auto;
`;

const LoginForm = styled.form`
  max-width: 320px;
  margin-top: 200px;
  text-align: center;

  font-family: 'Pretendard';
  font-style: normal;
  line-height: 19px;
`;

export default SignUp;
