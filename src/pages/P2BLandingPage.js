import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ProgressStep from '@bit/nexxtway.react-rainbow.progress-step';
import ProgressIndicator from '@bit/nexxtway.react-rainbow.progress-indicator';
import Image from 'react-bootstrap/Image'
import progressBarImg from '../asset/progressbar.png'
import paymeImg from '../asset/paymeImg.png'
import SFImg from '../asset/SFImg.png'
import tickImg from '../asset/tickImg.png'
import xero from '../asset/xero.png'

let windowObjectReference = null;
let previousUrl = null;

const receiveMessage = event => {
  // Do we trust the sender of this message? (might be
  // different from what we originally opened, for example).
  window.location = '/p2bupload?profile=Xero';
};

const openSignInWindow = (url, name) => {
  // remove any existing event listeners
  window.removeEventListener('message', receiveMessage);

  // window features
  const strWindowFeatures =
    'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';

  if (windowObjectReference === null || windowObjectReference.closed) {
    /* if the pointer to the window object in memory does not exist
     or if such pointer exists but the window was closed */
    windowObjectReference = window.open(url, name, strWindowFeatures);
    windowObjectReference.focus();
  } else if (previousUrl !== url) {
    /* if the resource to load is different,
     then we load it in the already opened secondary window and then
     we bring such window back on top/in front of its parent window. */
    windowObjectReference = window.open(url, name, strWindowFeatures);
    windowObjectReference.focus();
  } else {
    /* else the window reference must exist and the window
     is not closed; therefore, we can bring it back on top of any other
     window with the focus() method. There would be no need to re-create
     the window or to reload the referenced resource. */
    windowObjectReference.focus();
  }

  // add the listener for receiving a message from the popup
  window.addEventListener('message', event => receiveMessage(event), false);
  // assign the previous URL
  previousUrl = url;
}
// GCP App Engine link
const url = 'https://login.xero.com/identity/connect/authorize?client_id=B70BBE3FF3704DA0BC5F3CCDCBEB7476&scope=openid%20profile%20email%20accounting.transactions%20accounting.settings%20offline_access&response_type=code&redirect_uri=https%3A%2F%2Fhackademy-2020-290908.df.r.appspot.com%2Fcallback';

// local redirect link
// const url = 'https://login.xero.com/identity/connect/authorize?client_id=B70BBE3FF3704DA0BC5F3CCDCBEB7476&scope=openid%20profile%20email%20accounting.transactions%20accounting.settings%20offline_access&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback'

export default class P2BInputInfoPage extends React.Component {
    
    styles = {
      buttonStyle: {
        backgroundColor: 'red', 
        paddingLeft: 30, 
        paddingRight: 30, 
        borderRadius: 0 
      }
    }
  
    render() {
      return (
        <Container>
          <Row className="pb-3">
            <Col><h4>Peer-2-Business Crowd-lending</h4></Col>
          </Row>
          <Row>
            <Col md={10}>
              <Image src={progressBarImg} fluid />
            </Col>
          </Row>

          <br />

          <Row style={{ marginTop: 0}}>
            <Col className=""><h5>Create a new request in less than 10 mins!</h5></Col>
          </Row>
          <Row>
            <Col style={{ }}>
              <p>To Ensure a smooth application process, you may prepare the following documents in advance:</p>
              <ol>
                <li>Proof of Identity</li>
                <li>Proof of Residence</li>
                <li>Bank statement of the previous 6 months</li>
                <li>Audited Financial Statements</li>
                <li>Other Mandatory Documents (i.e. Sole Prop. Declaration Or Certified Copy of Partnership Deed)</li>
              </ol>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="auto"><Button block style={this.styles.buttonStyle} variant="danger" href="/p2bupload">Begin</Button></Col>
          </Row>

          <hr /> 

          <Row className="justify-content-md-center p-2">
            <Col md={3}>
              <Button href="/p2bupload?profile=Payme" block style={{ fontSize: 11, padding: 2, paddingBottom: 0}} variant="outline-dark">
                <Image style={{ width: 40, height: 40, float: 'left', marginTop: 7}} src={paymeImg} rounded />
                <p className="p-2">Begin with PayMe Business Profile <br /> (auto-fill 8 fields)</p>
                </Button>
            </Col>
            <Col md={3}>
              <Button href="/p2bupload?profile=SF" block style={{ fontSize: 11, padding: 2, paddingBottom: 0 }} variant="outline-dark">
              <Image style={{ width: 40, height: 40, float: 'left', marginTop: 7}} src={SFImg} rounded />
                <p className="p-2">Begin with SF Express Profile <br /> (auto-fill 8 fields)</p>
                </Button>
            </Col>
            <Col md={3}>
              <Button onClick={()=> openSignInWindow(url, 'Login to Xero')} block style={{ fontSize: 11, padding: 2, paddingBottom: 0}} variant="outline-dark">
              <Image style={{ width: 40, height: 40, float: 'left', marginTop: 7 }} src={xero} rounded />
                <p className="p-2">Begin with Xero Profile <br /> (auto-fill 12 fields)</p>
              </Button>
            </Col>
          </Row>

          <Row className="justify-content-sm-center p-2">
            <Col className="text-center text-secondary"><small>The P2B Crowd-lending service is operated under Securities and Future Ordiance(‘SFO’) 103(2) by Securities and Futures Commission which allows small-scale retail crowdfunding not exceedding HKD 5 Milllions over a 12 months period in Hong Kong.</small></Col>
          </Row>
        </Container>
      );
    }
}