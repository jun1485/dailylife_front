import { url } from 'inspector';
import styled from 'styled-components';

export default function WarningModal() {
  return (
    <div className="warning-modal-container">
      <WarningIcon />
    </div>
  );
}

const WarningIcon = styled.div`
  background-image: url('/public/assets/error_icon.png');
`;
