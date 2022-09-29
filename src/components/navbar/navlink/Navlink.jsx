import { useSelector } from 'react-redux';

import MyPageIcon from 'components/Icons/MyPageIcon';
import PostRender from './postRender';


function NavLinks() {
  const tokenInfo = useSelector(state => state.authToken);

  return (
    <div className="nav-links">
      <PostRender />
      <MyPageIcon path={tokenInfo.accessToken ? '/myInfo' : '/login'} />
    </div>
  );
}

export default NavLinks;
