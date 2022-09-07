import { Link } from 'react-router-dom';

import PostRender from './PostRender';

function NavLinks() {
  const accessToken = localStorage.getItem('accessToken');
  return (
    <div className="nav-links">
      <PostRender />
      {accessToken ? <Link to="/myInfo" className="link link4" /> : <Link to="/login" className="link link4" />}
    </div>
  );
}

export default NavLinks;
