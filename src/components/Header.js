import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Navigation from './Navigation';
import ladybug from '../img/ladybug.png';

function Header() {
  return (
    <div className="header">
        <h1>Lady Bugs</h1>
        <Navigation/>
    </div>
  );
}

export default Header;