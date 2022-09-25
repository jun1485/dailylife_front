import { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  width?: string;
  height?: string;
  text: string;
  isActive: boolean;
  requestPath?: string;
}

export default function MyInfoButton({ text, isActive, requestPath, width = '100%', height = 'auto' }: Props) {
  useEffect(() => {
    console.log('isActive:', isActive);
  });

  return <StyledButton isActive={isActive} width={width} height={height}>{text}</StyledButton>;
}

const StyledButton = styled.button<{ isActive: boolean, width: string, height: string }>`
  background-color: ${(props) => (props.isActive ? '#CF990C' : '#BCBCBC')};
  border: 1px solid ${(props) => (props.isActive ? '#CF990C' : '#BCBCBC')};
  border-radius: 4px;
  width: ${props => props.width};
  height: ${props => props.height};
  color: white;
  font-family: Pretendard;
  font-weight: 500px;
  font-size: 13px;
  line-height: 15.6px;
`;
