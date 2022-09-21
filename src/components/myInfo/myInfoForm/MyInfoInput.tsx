import styled from "styled-components";

interface Props {
  type?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
}

export default function MyInfoInput(
  {
    type = 'text',
    width = 355,
    height = 34,
    backgroundColor = '#f4f4f477'
  }: Props) {
  function handleChange(e) {
    // console.log(e.target.value)
  }
  return <StyledInput
    type={type}
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    onChange={handleChange} />
}

const StyledInput = styled.input<Props>`

display: inline-block;
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
`