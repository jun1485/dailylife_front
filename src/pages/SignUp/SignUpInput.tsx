import styled from "styled-components";

interface SizeType {
  width?: string;
  height?: string;
}

interface Props extends SizeType {
  type: 'text' | 'email' | 'password';
  text: string;
  setText: string;
}

function SignUpInput({ type, width = '100%', height = '55px', text, setText }: Props) {
  return <StyledInput type={type} width={width} height={height}>
    {text}
  </StyledInput>
}

export default SignUpInput;

const StyledInput = styled.input<SizeType>`
  width: ${props => props.width};
  height: ${props => props.height};
`