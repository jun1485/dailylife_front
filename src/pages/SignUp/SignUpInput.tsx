import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  text: string;
  setText: string;
}

function SignUpInput({ width = '100%', height = '100%', text, setText }: Props) {
  return <StyledInput></StyledInput>
}

export default SignUpInput;

const StyledInput = styled.input`
  
`