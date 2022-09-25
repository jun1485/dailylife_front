import { validate } from 'common/utils';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface Props {
  type?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  placeholder?: string;
  description?: string;
}
interface ValidateProps extends Props {
  state: string;
  formType: string;
}
interface StateProps extends ValidateProps {
  setState: Function;
}
interface ResultType {
  isValid: boolean;
  error: string;
}

export default function MyInfoInput({
  type = 'text',
  width = '100%',
  height = '100%',
  backgroundColor = '#f4f4f477',
  placeholder = '',
  description = '',
  setState,
  state,
  formType,
}: StateProps) {
  const [result, setResult] = useState<ResultType>({
    isValid: true,
    error: '',
  });
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setState(e.target.value);
    const validationResult = validate(e.target.value, formType);
    if (validationResult)
      setResult({ isValid: false, error: validationResult[formType] });
    else setResult({ isValid: true, error: '' });
  }
  return (
    <div>
      <StyledInput
        type={type}
        width={width}
        backgroundColor={backgroundColor}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <Description isValid={result.isValid}>
        {result.isValid ? description : result.error}
      </Description>
    </div>
  );
}

const StyledInput = styled.input<Props>`
  position: relative;
  display: inline-block;
  padding: 7px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: ${(props) => props.backgroundColor};
  border: 1px solid #bcbcbc5b;
  border-radius: 4px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0.02em;
`;
const Description = styled.p<{ isValid: boolean }>`
  position: absolute;
  margin-top: 6px;
  font-family: Pretendard;
  font-weight: 300;
  font-size: 12px;
  line-height: 14.4px;
  color: ${(props) => (props.isValid ? '#909090' : 'red')};
`;
