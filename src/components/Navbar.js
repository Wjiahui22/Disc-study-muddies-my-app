import { Link } from 'react-router-dom';

function Navbar() {
    return(
      <nav>
      <img src="https://i.postimg.cc/XYKS7S0m/logo-png.png" class="center" />
      <Link to="/">FIND UR NERD</Link>
      <span>LOCK IN TRACKER</span>
      <Link to="/profile">Study Profile</Link>
    </nav>
    );
  }

  export default Navbar;