import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
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
          <Route component={NoMatch} />
        </Switch>
      </Router>

    </React.Fragment>
    </FullHeight>
      );
}

export default App;
