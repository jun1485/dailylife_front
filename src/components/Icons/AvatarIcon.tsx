import styled from 'styled-components';

function AvatarIcon({ width = 38 , height=38}) {
  return <Avatar width={width} height={height} />;
}
export default AvatarIcon;
const Avatar = styled.div <{width: number | undefined, height: number | undefined}>`
  border-radius: 50%;
  margin-top: 0.7vh;
  float:left;
  width: ${props => props.width}px;
  height:${props => props.height}px;
  aspect-ratio: 1;
  background-color: purple;
`;
