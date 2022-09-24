import { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  isActive: boolean;
  requestPath?: string;
}

export default function MyInfoButton({ text, isActive, requestPath }: Props) {
  useEffect(() => {
    console.log('isActive:', isActive);
  });

  return <StyledButton isActive={isActive}>{text}</StyledButton>;
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
