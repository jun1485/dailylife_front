import { PropTypes } from 'prop-types';
import styled from 'styled-components';

function LogInButton(props) {
  const { text } = props;
  return <StyledButton>{text}</StyledButton>;
}

LogInButton.defaultProps = {
  text: '',
};

LogInButton.propTypes = {
  text: PropTypes.string,
};

export default LogInButton;

const StyledButton = styled.button`
  margin-top: 30px;
  padding: 13px;
  width: 100%;
  text-transform: uppercase;
  outline: 0;
  background: linear-gradient(
    91.5deg,
    #fcc400 0%,
    #f1a027 100%
  );
  border: 0;
  border-radius: 4px;
  color: #ffffff;
  -webkit-transition: all 0.3 ease;
  transition: all 0.1s ease-out;
  cursor: pointer;

  font-weight: 500;
  font-size: 17px;
  letter-spacing: 0.03em;

  &:hover,
  :active,
  :focus {
    background-color: rgb(252, 65, 96);
  }
`;
