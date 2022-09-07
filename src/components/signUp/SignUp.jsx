// 에러처리 아직 안했음
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import InputInfo from './InputInfo';
import useForm from './useForm';

import signupFormData from 'mocks/signupFormData';

function SignUp() {
  const { handleChange, handleSubmit, errors } = useForm({
    userId: '',
    phoneNumber: '',
    name: '',
    password: '',
    email: '',
  });

  return (
    <SignUpWrapper>
      <LoginForm action="/signin" method="POST" onSubmit={() => handleSubmit()}>
        {loginFormData.map((data) => (
          <InputInfo
            data={data}
            handleChange={(event) => handleChange(event, data.name)}
            errorMessage={errors[data.name]}

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
  margin-top: 12px;
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
