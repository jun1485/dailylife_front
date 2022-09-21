import axios from 'axios';
import styled from 'styled-components';

interface Props {
  inputName: string;
  inputId: string;
  text: string;
  isActive: boolean;
  requestPath: string;
}

export default function MyInfoButton({ text, isActive, requestPath }: Props) {
  function handleClick(e: MouseEvent) {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_HOST}/${requestPath}`,
        {},
        {
          headers: {
            'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
          },
        },
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <StyledButton isActive={isActive} onClick={handleClick}>
      {' '}
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? '#CF990C' : '#BCBCBC')};
  border: 1px solid ${(props) => (props.isActive ? '#CF990C' : '#BCBCBC')};
  border-radius: 4px;
  width: 85px;
  height: 28px;
  color: white;
  font-family: Pretendard;
  font-weight: 500px;
  font-size: 13px;
  line-height: 15.6px;
`;
