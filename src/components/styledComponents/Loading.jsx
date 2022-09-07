import { Background, LoadingText } from './Background';
import Spinner from './Spinner';

function LoadingSpinner() {
  return (
    <Background>
      <LoadingText />
      <Spinner />
    </Background>
  );
}

export default LoadingSpinner;
