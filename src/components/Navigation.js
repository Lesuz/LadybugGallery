import { Link} from 'react-router-dom';
import './Navigation.css'

function Nav() {
  return (
        <div className="nav">
            <ul className="header-menu">
                <Link to="/pages/LadyBugGallery" className="header-menu-link">
                    <li>Gallery</li>
                </Link>
                <Link to="/pages/Whyladybug" className="header-menu-link-center">
                    <li>Why Ladybugs?</li>
                </Link>
                <Link to="/pages/Aboutartist" className="header-menu-link">
                    <li>About Artist</li>
                </Link>
            </ul>
        </div>
  );
}

export default Nav;