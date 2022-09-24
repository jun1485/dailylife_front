import styled from "styled-components";

interface SizeType {
  width?: string;
  height?: string;
}

interface Props extends SizeType {
  text: string;
  setText: string;
}

function SignUpInput({ width = '100%', height = '55px', text, setText }: Props) {
  return <StyledInput width={width} height={height}>
    {text}
  </StyledInput>
}

export default SignUpInput;

const StyledInput = styled.input<SizeType>`
  width: ${props => props.width};
  height: ${props => props.height};
`