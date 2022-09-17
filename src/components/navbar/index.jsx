import './index.css';
import NavLinks from './navlink/navlink';
import NavLogo from './navLogo/navLogo';
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
