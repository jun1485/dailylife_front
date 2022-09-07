import styled from 'styled-components';

function InputInfo({ data: { placeholder, name }, handleChange, errorMessage }) {
  return (
    <InputWrapper>
      <Input type="text" placeholder={placeholder} name={name} onChange={handleChange} />
      <ErrorText>{errorMessage}</ErrorText>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const ErrorText = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.01em;
  color: #e50303;
  margin-top: 5px;
  display: flex;
`;

const Input = styled.input`
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

export default InputInfo;
