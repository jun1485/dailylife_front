import './index.scss';
import NavLinks from './navlink/Navlink';
import NavLogo from './navLogo/NavLogo';
import Searching from './searching/Searching';

function Navbar() {
  return (
    <div className="nav">
      <NavLogo />
      <Searching />
      <NavLinks />
    </div>
  );
}

export default Navbar;
