import { validate } from "common/utils";
import { ChangeEvent, useState } from "react";
import styled, { css } from "styled-components/macro";

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
  const [count, setCount] = useState(0);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCount(e.target.value.length);
    const validateResult = validate(e.target.value, formType);
    setText(e.target.value)
    if (validateResult[formType])
      setResult({ isValid: false, error: validateResult[formType] });
    else setResult({ isValid: true, error: '' });
    if (e.target.value.length === 0) setResult({ isValid: undefined, error: '' });
  }

  return <StyledWrapper className='signup-input-wrapper'>
    <Section isValid={result.isValid}>
      <Header>
        <span>{title}</span>
        <span>{count}/{limit}</span>
      </Header>
      <StyledInput type={type} width={width} height={height} onChange={handleChange} maxLength={limit} />
    </Section>
    {result.isValid ? null : <Description isValid={result.isValid}>{result.error}</Description>}
  </StyledWrapper>
}

export default SignUpInput;

const StyledWrapper = styled.div`
  display: grid;
`
const Section = styled.div<{ isValid: boolean | undefined }>`
  display: grid;
  /* border: 1px solid #D7D7D7; */
  ${props => {
    switch (props.isValid) {
      case true:
        return css`
          border: 1px solid #CF990C;
        `;
      case false:
        return css`
          border: 1px solid #E50303;
        `;
      default:
        return css`
          border: 1px solid #D7D7D7;
        `;
    }
  }}
    border-radius: 4px;
    padding: 9px;
`;
const Header = styled.header`
  display: flex;
  margin-bottom: 2px;
  justify-content: space-between;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;
`
const StyledInput = styled.input<SizeType>`
  width: ${props => props.width};
  height: ${props => props.height};
  font-size: 15px;
  font-family: Pretendard;
  line-height: 18px;
  font-weight: 400;
`
const Header = styled.header`
  grid-row-start: 1;
  justify-content: space-between;
  opacity: 0;
  height: 0;
  margin-bottom: 2px;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;
  
  ${StyledInput}:focus + & {
    display: flex;
    height: 14.5px;
    opacity: 1;
    transition: all .3s ease;
  }
`
const Description = styled.p<{ isValid: boolean | undefined }>`
  color: #E50303;
  font-size: 12px;
  font-weight: 300;
  line-height: 14.4px;
  margin-top: 5px;
`