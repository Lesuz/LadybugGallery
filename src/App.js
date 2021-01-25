import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Aboutartist from './pages/Aboutartist';
import LadyBugGallery from './pages/LadyBugGallery';
import Whyladybug from './pages/Whyladybug';


function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          {/*Redirecting site to gallery component */}
          <Route path="/" exact ><Redirect to="/pages/LadyBugGallery" /></Route>
          <Route path="/pages/LadyBugGallery" component={LadyBugGallery}/>
          <Route path="/pages/Aboutartist" component={Aboutartist}/>
          <Route path="/pages/Whyladybug" component={Whyladybug}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
