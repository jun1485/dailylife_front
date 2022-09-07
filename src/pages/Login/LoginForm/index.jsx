import styled from 'styled-components';

import EasyLogin from './EasyLogin';
import LoginFind from './LoginFind/index';
import useLoginForm from './useLoginForm';

import LoginButton from 'components/buttons/LoginButton';
import LoadingSpinner from 'components/styledComponents/Loading';
import loginFormData from 'mocks/loginFormData';

function LoginForm() {
  const {
    formData,
    handleChange,
    handleSubmit,
    loading,
  } = useLoginForm({
    userId: '',
    userPassword: '',
  });

  return (
    <FormWrapper>
      <StyledForm
        action="/login"
        method="POST"
        onSubmit={handleSubmit}
      >
        {loading && <LoadingSpinner />}
        {loginFormData.map((data) => (
          <StyledInput
            key={data.name}
            type={data.type}
            placeholder={data.placeholder}
            name={data.name}
            style={
              formData.userId
                ? {
                  border: '1px solid #FCC401',
                  color: '#1A1A1A',
                }
                : { border: '1px solid #d7d7d7' }
            }
            onChange={handleChange}
          />
        ))}
        <LoginButton text="로그인" />
        <LoginFind />
        <EasyLogin />
        {/* <p className="message">
            {" "}
            Not registered? <Link to="/SignIn">Create an account</Link>
          </p> */}
      </StyledForm>
    </FormWrapper>
  );
}

export default LoginForm;
const FormWrapper = styled.div`
  max-width: 320px;
  margin-top: 200px;
  text-align: center;

  font-family: 'Pretendard';
  font-style: normal;
  line-height: 19px;
`;
const StyledForm = styled.form``;
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

  &:nth-last-of-type(1) {
    margin-top: 6px;
  }
`;
