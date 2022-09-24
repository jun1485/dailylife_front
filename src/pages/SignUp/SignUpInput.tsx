import styled from "styled-components";

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

  const [result, setResult] = useState<ResultType>({
    isValid: true,
    error: '',
  });
}

export default SignUpInput;

const StyledInput = styled.input<SizeType>`
  width: ${props => props.width};
  height: ${props => props.height};
`