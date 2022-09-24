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

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const validateResult = validate(e.target.value, formType);
    setText(e.target.value)
    if (validateResult)
      setResult({ isValid: false, error: validateResult[formType] });
    else setResult({ isValid: true, error: '' });
  }

  return <div>
    <StyledInput type={type} width={width} height={height} onChange={handleChange} />
  </div>
}

export default SignUpInput;

const StyledInput = styled.input<SizeType>`
  width: ${props => props.width};
  height: ${props => props.height};
`