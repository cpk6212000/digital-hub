import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import P2BLandingPage  from './pages/P2BLandingPage';
import P2BInputInfoPage from './pages/P2BInputInfoPage';
import P2BConfirmPage from './pages/P2BConfirmPage';
import P2BUploadDocPage from './pages/P2BUploadDocPage';
import FullHeight from "react-full-height";

function App() {
  return (
    <FullHeight>
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/p2blanding" component={P2BLandingPage} />
          <Route path="/p2binput" component={P2BInputInfoPage} />
          <Route path="/p2bconfirm" component={P2BConfirmPage} />
          <Route path="/p2bupload" component={P2BUploadDocPage} />
          <Route component={NoMatch} />
        </Switch>
      </Router>

    </React.Fragment>
    </FullHeight>
      );
}

export default App;
