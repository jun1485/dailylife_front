import { Link } from 'react-router-dom';

import MainLogoIcon from 'components/Icons/mainLogoIcon';

function NavLogo() {
  return (
    <div className="nav-header">
      <button className="nav-title" type="button">
        <Link to="/">
          <MainLogoIcon />
        </Link>
      </button>
    </div>
  );
}

export default NavLogo;
