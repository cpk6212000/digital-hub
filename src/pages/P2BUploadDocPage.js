import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import ProgressStep from '@bit/nexxtway.react-rainbow.progress-step';
import ProgressIndicator from '@bit/nexxtway.react-rainbow.progress-indicator';


let windowObjectReference = null;
let previousUrl = null;

const receiveMessage = event => {
  // Do we trust the sender of this message? (might be
  // different from what we originally opened, for example).
    window.location.pathname = '/p2bconfirm';
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

const url = 'https://login.xero.com/identity/connect/authorize?client_id=B70BBE3FF3704DA0BC5F3CCDCBEB7476&scope=openid%20profile%20email%20accounting.transactions%20accounting.settings%20offline_access&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback';

export default class P2BUploadDocPage extends React.Component {

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
      <Container style={{ marginLeft: 20, marginRight: 20 }}>
        <Row>
          <Col><h3>Business Profile</h3></Col>
        </Row>

        <Row>
          <Col>
            <p>Skip some questions and file uploads, by connecting: (you can connect to more than 1 of them)</p>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Button onClick={() => openSignInWindow(url, 'Test')}>OAuth Test</Button>
          </Col>
          <Col md={4}>
            <span data-xero-sso data-href="/sign-in/xero" data-label="Sign in with Xero"></span>
            <script src="https://edge.xero.com/platform/sso/xero-sso.js" async defer></script>
          </Col>
          <Col md={4}>
            <Nav.Link href="" style={{ color: 'red' }}>Your WeChat for Business profile</Nav.Link>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col md={6}>
            <label htmlFor="basic-url">Applicant Full Name:</label>
            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon3" />
            </InputGroup>
          </Col>
          <Col md={6}>
            <label htmlFor="basic-url">Contact Email:</label>
            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon3" />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <label htmlFor="basic-url">Registered Business Name:</label>
            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon3" />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Identity Proof</Card.Title>
                <Card.Text>HKID 2020.jpeg</Card.Text>
                <Button variant="primary">Upload</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Residence Proof</Card.Title>
                <Card.Text>Address 2020.pdf</Card.Text>
                <Button variant="primary">Upload</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Audited Statement</Card.Title>
                <Card.Text>Statement 2020.pdf</Card.Text>
                <Button variant="primary">Upload</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Other Documents</Card.Title>
                <Card.Text>Declaration 2020.pdf</Card.Text>
                <Button variant="primary">Upload</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col><Button style={this.styles.buttonStyle} variant="danger" href="/p2blanding">Back</Button></Col>
          <Col style={{ paddingTop: 10 }} xs={6}>
            <ProgressIndicator currentStepName='step-2' style={{ borderColor: 'red' }}>
              <ProgressStep name="step-1" style={{ borderColor: 'red' }} />
              <ProgressStep name="step-2" />
              <ProgressStep name="step-3" />
              <ProgressStep name="step-4" />
            </ProgressIndicator>
            <p style={{ textAlign: "center" }}>Request Detail</p>
          </Col>
          <Col><Button style={this.styles.buttonStyle} variant="danger" href="/p2binput">Next</Button></Col>
        </Row>
      </Container>
    );
  }
}