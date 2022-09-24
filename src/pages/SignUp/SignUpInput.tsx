import { validate } from "common/utils";
import { ChangeEvent, useState } from "react";
import styled from "styled-components/macro";

interface SizeType {
  width?: string;
  height?: string;
}

interface Props extends SizeType {
  type: 'text' | 'email' | 'password';
  text: string;
  setText: Function;
  formType: string;
}
interface ResultType {
  isValid: boolean,
  error: ''
}

function SignUpInput({ type, width = '100%', height = '55px', text, setText, formType }: Props) {
  const [result, setResult] = useState<ResultType>({
    isValid: true,
    error: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const validateResult = validate(e.target.value, formType);
    setText(e.target.value)
    if (validateResult)
      setResult({ isValid: false, error: validateResult[formType] });
    else setResult({ isValid: true, error: '' });
  }

  return <StyledWrapper>
    <StyledInput type={type} width={width} height={height} onChange={handleChange} />
    {result.isValid ? null : <Description isValid={result.isValid}>{result.error}</Description>}
  </StyledWrapper>
}

export default SignUpInput;

const StyledWrapper = styled.div.attrs({ class: ['signup-input-wrapper'] })`
  display: grid;
`
const StyledInput = styled.input<SizeType>`
  width: ${props => props.width};
  height: ${props => props.height};
`
const Description = styled.p<{ isValid: boolean }>`

`