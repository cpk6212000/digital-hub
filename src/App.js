import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { VisionGoNavigationBar } from './components/VisionGoNavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import P2BLandingPage  from './pages/P2BLandingPage';
import P2BInputInfoPage from './pages/P2BInputInfoPage';
import P2BConfirmPage from './pages/P2BConfirmPage';
import P2BUploadDocPage from './pages/P2BUploadDocPage';
import P2BAcknowledgePage from './pages/P2BAcknowledgePage';
import VisionGoPage from './pages/VisionGoPage';
import DashboardPage from './pages/DashboardPage';
import FullHeight from "react-full-height";
import SurveryPage from './pages/SurveryPage';
import SurveryPage2 from './pages/SurveryPage2';
import Recommnadtion from './pages/Recommnadtion';
import Callback from './pages/callback';

class App extends React.Component {
  state = {
    isVisionGo: false
  }
  componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const website = params.get('website');

    if(website == 'visionGo') {
      this.setState({
        isVisionGo: true
      })
    } else {
      this.setState({
        isVisionGo: false
      })
    } 
  }
  render() {
    return (
      <FullHeight>
      <React.Fragment>
        <Router>
          {
            this.state.isVisionGo == true
            ? <VisionGoNavigationBar />
            : <NavigationBar />
          }
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/survey1" component={SurveryPage}></Route>
            <Route path="/survey2" component={SurveryPage2}></Route>
            <Route path="/recommendation" component={Recommnadtion}></Route>
            <Route path="/p2blanding" component={P2BLandingPage} />
            <Route path="/p2binput" component={P2BInputInfoPage} />
            <Route path="/p2bconfirm" component={P2BConfirmPage} />
            <Route path="/p2bupload" component={P2BUploadDocPage} />
            <Route path="/p2backnowledge" component={P2BAcknowledgePage} />
            <Route path="/visionGo" component={VisionGoPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/callback" component={Callback} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
  
      </React.Fragment>
      </FullHeight>
    );
  }
}

export default App;
