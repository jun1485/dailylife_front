import { validate } from "common/utils";
import { ChangeEvent, useState } from "react";
import styled from "styled-components/macro";

interface SizeType {
  width?: string;
  height?: string;
}

interface Props extends SizeType {
  type: 'text' | 'email' | 'password';
  title: string;
  setText: Function;
  formType: string;
  limit: number;
}
interface ResultType {
  isValid: boolean | undefined,
  error: ''
}

function SignUpInput({ type, width = '100%', height = 'auto', title, setText, formType, limit }: Props) {
  const [result, setResult] = useState<ResultType>({
    isValid: undefined,
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
  font-size: 15px;
  font-family: Pretendard;
  line-height: 18px;
  font-weight: 400;
`
const Description = styled.p<{ isValid: boolean | undefined }>`
  color: #E50303;
  font-size: 12px;
  font-weight: 300;
  line-height: 14.4px;
  margin-top: 5px;
`