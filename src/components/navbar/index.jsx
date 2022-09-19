import './index.css';
import NavLinks from './navlink/Navlink';
import NavLogo from './navLogo/NavLogo';
import Searching from './searching/Searching';

function Navbar() {
  // const pagingInfo = usePagination({ itemCountPerPage: 5, pageRangeCount: 3 });
  return (
    <div className="nav">
      <NavLogo />
      <Searching />
      <NavLinks />
    </div>
  );
}

export default Navbar;
