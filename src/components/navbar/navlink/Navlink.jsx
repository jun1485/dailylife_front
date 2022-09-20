import { useSelector } from 'react-redux';

import PostRender from './PostRender';

import MyPageIcon from 'components/Icons/MyPageIcon';


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
