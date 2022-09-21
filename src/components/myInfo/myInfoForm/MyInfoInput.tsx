import { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
  type?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  placeholder?: string;
  description?: string;
}
interface StateProps extends Props {
  setState: Function;
}

export default function MyInfoInput(
  {
    type = 'text',
    width = 355,
    height = 34,
    backgroundColor = '#f4f4f477',
    placeholder = '',
    setState,
    description = ''
  }: StateProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // console.log(e.target.value)
    setState(e.target.value);
  }
  return (
    <div className="myinfo-input-wrapper">
      <StyledInput
        type={type}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)} />
      <Description>
        {description}
      </Description>
    </div>
  )
}

const StyledInput = styled.input<Props>`
  padding: 7px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  background: ${props => props.backgroundColor};
  border: 1px solid #bcbcbc5b;
  border-radius: 4px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0.02em;
`;
const Description = styled.p`
  margin-top: 8px;
  font-family: Pretendard;
  font-weight: 300;
  font-size: 12px;
  line-height: 14.4px;
  color: #909090;
`