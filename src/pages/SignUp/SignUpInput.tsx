import { validate } from 'common/utils';
import { ChangeEvent, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { PayloadType } from '.';

interface SizeType<T> {
  width?: T;
  height?: T;
}
interface Props extends SizeType<string> {
  type: string;
  title: string;
  setText: Function;
  formType: string;
  reqId: string;
  limit: number;
  placeholder: string;
}

interface ResultType {
  isValid: boolean | undefined;
  error: '';
}

function SignUpInput({
  type,
  width = '100%',
  height = 'auto',
  title,
  setText,
  formType,
  reqId,
  limit,
  placeholder,
}: Props) {
  const [result, setResult] = useState<ResultType>({
    isValid: undefined,
    error: '',
  });
  const [count, setCount] = useState(0);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCount(e.target.value.length);
    const validateResult = validate(e.target.value, formType);
    setText((prevState: PayloadType) => ({
      ...prevState,
      [reqId]: e.target.value,
    }));
    if (validateResult[formType])
      setResult({ isValid: false, error: validateResult[formType] });
    else setResult({ isValid: true, error: '' });
    if (e.target.value.length === 0)
      setResult({ isValid: undefined, error: '' });
  }

  return (
    <StyledWrapper className="signup-input-wrapper">
      <Section isValid={result.isValid}>
        <StyledInput
          type={type}
          width={width}
          height={height}
          onChange={handleChange}
          maxLength={limit}
          placeholder={placeholder}
        />
        <Header>
          <span>{title}</span>
          <span>
            {count}/{limit}
          </span>
        </Header>
      </Section>
      <Description isValid={result.isValid}>{result.error}</Description>
    </StyledWrapper>
  );
}

export default SignUpInput;

const StyledWrapper = styled.div`
  display: grid;
`
const Section = styled.div<{ isValid: boolean | undefined }>`
  display: grid;
  grid-template-rows: 0 1fr;
  height: 54.5px;
  ${(props) => {
    switch (props.isValid) {
      case true:
        return css`
          border: 1px solid #cf990c;
        `;
      case false:
        return css`
          border: 1px solid #e50303;
        `;
      default:
        return css`
          border: 1px solid #d7d7d7;
        `;
    }
  }}
  border-radius: 4px;
  padding: 9px;
  &:focus-within {
    grid-template-rows: auto;
  }
`;
const StyledInput = styled.input<SizeType<string>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 15px;
  font-family: Pretendard;
  line-height: 18px;
  font-weight: 400;

  &:focus::placeholder {
    opacity: 0;
  }
`;
const Header = styled.header`
  grid-row-start: 1;
  display: flex;
  justify-content: space-between;
  height: 0;
  opacity: 0;
  margin-bottom: 2px;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;

  ${StyledInput}:focus + & {
    height: 14.5px;
    opacity: 1;
    transition: opacity 0.3s ease-out;
  }
  & > span {
    overflow: hidden;
  }
`;
const Description = styled.p<{ isValid: boolean | undefined }>`
  height: 2vh;
  color: #e50303;
  font-size: 12px;
  font-weight: 300;
  line-height: 14.4px;
  margin-top: 5px;
`
