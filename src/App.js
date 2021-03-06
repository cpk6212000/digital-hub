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
import Recommnadtion from './pages/Recommnadtion';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Callback from './pages/callback';
import CompanyInfoPage from './pages/P2BCompanyInfoPage';

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
            <Route path="/recommendation" component={Recommnadtion}></Route>
            <Route path="/p2blanding" component={P2BLandingPage} />
            <Route path="/p2binput" component={P2BInputInfoPage} />
            <Route path="/p2bconfirm" component={P2BConfirmPage} />
            <Route path="/p2bupload" component={P2BUploadDocPage} />
            <Route path='/p2bcompanyinfo' component={CompanyInfoPage} />
            <Route path="/p2backnowledge" component={P2BAcknowledgePage} />
            <Route path="/visionGo" component={VisionGoPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/projectlist" component={ProjectListPage} />
            <Route path="/projectdetail" component={ProjectDetailPage} />
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
