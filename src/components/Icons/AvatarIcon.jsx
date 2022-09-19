import styled from 'styled-components';

function AvatarIcon() {
  return <Avatar />;
}
export default AvatarIcon;
const Avatar = styled.div`
  border-radius: 50%;
  width: 38px;
  height:38px;
  aspect-ratio: 1;
  background-color: purple;
`;
