import Searching from './searching/Searching';

import './index.css';
import NavLogo from './navLogo/navLogo';
import NavLinks from './navlink/navlink';

function Navbar() {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <div className="nav">
      <NavLogo />
      <Searching />
      <NavLinks />
    </div>
  );
}

export default Navbar;
