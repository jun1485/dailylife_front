import './index.css';
import NavLinks from './navlink/navlink';
import NavLogo from './navLogo/navLogo';
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
