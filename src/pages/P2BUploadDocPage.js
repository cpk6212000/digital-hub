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
import paymeImg from '../asset/paymeImg.png'
import SFImg from '../asset/SFImg.png'
import xero from '../asset/xero.png'
import tickImg from '../asset/tickImg.png'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'



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

const url = 'https://login.xero.com/identity/connect/authorize?client_id=A974E29299064E2E9C19C0F0364BE595&scope=openid%20profile%20email%20accounting.transactions%20accounting.settings%20offline_access&response_type=code&redirect_uri=https%3A%2F%2Fhackademy-2020-290908.df.r.appspot.com%2Fcallback';

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
        <Row className="">
          <Col>
            <h4>
              Business Profile
            </h4>
          </Col>
        </Row>

        <div style={{ margin: 10, backgroundColor: 'white' }}>

          <Row className="">
            <Col>
              <p>Skip some questions and file uploads, by connecting: (you can connect to more than 1 of them)</p>
            </Col>
          </Row>

          <Row className="">
            <Col md={4}>
              <Image style={{ width: 60, height: 60, float: 'left' }} src={paymeImg} rounded />
              <Nav.Link className="pt-3" href="" style={{ color: 'red', textDecoration: 'underline' }}>Your PayMe for Business profile</Nav.Link>
            </Col>
            <Col md={4}>
              <Image style={{ width: 60, height: 60, float: 'left' }} src={SFImg} rounded />
              <Nav.Link className="pt-3" href="" style={{ color: 'red', textDecoration: 'underline' }}>Your SF Express profile</Nav.Link>
            </Col>
            <Col md={4}>
              <Image style={{ width: 60, height: 60, float: 'left' }} src={xero} rounded />
              <Nav.Link className="pt-3" onClick={() => openSignInWindow(url, 'Login to Xero')} style={{ color: 'red', textDecoration: 'underline' }}>Your Xero for Business profile</Nav.Link>
            </Col>
          </Row>

        </div>


        <hr />

        <Row>
          <Col md={6}>
            <label htmlFor="basic-url"><h5>Applicant Full Name:</h5></label>
            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon3" value="Vicky Zhang" />
            </InputGroup>
          </Col>
          <Col md={6}>
            <label htmlFor="basic-url"><h5>Contact Email:</h5></label>
            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon3" value="vickyzhang@gmail.com" />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <label htmlFor="basic-url"><h5>Registered Business Name:</h5></label>
            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon3" value="Vicky Chinese Food (HK) Limited" />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <label htmlFor="basic-url"><h5>Identity Proof</h5></label>
            <Form className="mb-3">
              <Form.File
                id="custom-file"
                label="HKID 2020.jpg"
                data-browse="Upload"
                custom
              />
            </Form>
          </Col>
          <Col md={3}>
            <label htmlFor="basic-url"><h5>Residence Proof</h5></label>
            <Form className="mb-3">
              <Form.File
                id="custom-file"
                label="Address 2020.pdf"
                data-browse="Upload"
                custom
              />
            </Form>
          </Col>
          <Col md={3}>
            <label htmlFor="basic-url"><h5>Audited Statement</h5></label>
            <Form className="mb-3">
              <Form.File
                id="custom-file"
                label="Statement 2020.pdf"
                data-browse="Upload"
                custom
              />
            </Form>
          </Col>
          <Col md={3}>
            <label htmlFor="basic-url"><h5>Other Documents</h5></label>
            <Form className="mb-3">
              <Form.File
                id="custom-file"
                label="Declaration 2020.pdf"
                data-browse="Upload"
                custom
              />
            </Form>
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
