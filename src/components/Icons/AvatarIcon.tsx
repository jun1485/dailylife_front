import styled from 'styled-components';

interface AvatarProps {
  width: number | undefined;
  height: number | undefined;
  image?: string | undefined;
}

function AvatarIcon({ width = 38, height = 38, image }: AvatarProps) {
  return <Avatar width={width} height={height} image={image} />;
}
export default AvatarIcon;
const Avatar = styled.div<AvatarProps>`
  border-radius: 50%;
  margin-top: 0.7vh;
  float: left;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  aspect-ratio: 1;
  background-color: purple;
  background-image: ${(props) => (props.image ? `url(${props.image})` : null)};
  background-position: center;
  background-size: cover;
`;
