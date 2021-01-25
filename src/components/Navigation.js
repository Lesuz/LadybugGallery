import { Link} from 'react-router-dom';

import LadyBugGallery from '../pages/LadyBugGallery';
import Whyladybug from '../pages/Whyladybug';
import Aboutartist from '../pages/Aboutartist';

function Nav() {
  return (
        <div className="nav">
            <ul className="header-menu">
                <Link to="/pages/LadyBugGallery" className="header-menu-link">
                    <li>Gallery</li>
                </Link>
                <Link to="/pages/Whyladybug" className="header-menu-link-center">
                    <li>Why Lady Bugs?</li>
                </Link>
                <Link to="/pages/Aboutartist" className="header-menu-link">
                    <li>About Artist</li>
                </Link>
            </ul>
        </div>
  );
}

export default Nav;