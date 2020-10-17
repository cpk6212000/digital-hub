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
import documentImg from '../asset/documentImg.png'
import upload1Img from '../asset/upload1Img.png'
import upload2Img from '../asset/upload2Img.png'
import upload3Img from '../asset/upload3Img.png'
import ClipLoader from "react-spinners/ClipLoader";
import tick from '../asset/tick.png';



export default class P2BUploadDocPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      connectToPayme: false,
      connectToSF: false,
      connectToXero: false
    };
  }

  styles = {
    buttonStyle: {
      backgroundColor: 'red',
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 0
    }
  }

  timer = null 

  center = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };


  componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const profile = params.get('profile');

    if (profile == 'Payme') {
      this.setState({
        connectToPayme: true
      })
    } else if (profile == 'SF') {
      this.setState({
        connectToSF: true
      })
    } else if (profile == 'Xero') {
      this.setState({
        connectToXero: true
      })
    }
    this.timer = setTimeout(() =>
      this.setState({
        loading: false
      }),
      1500
    )
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }


  render() {
    if(this.state.loading){
      return (
        <div style={this.center}>
            <ClipLoader
              size={300}
              color={"#D0021B"}
              loading={this.state.loading}
              style={{ margin: '0 auto'}}
            />
            <h5>Fetching relevant data from Xero</h5>
        </div>
      )
    }
    return (
      <Container>
        <Row className="">
          <Col>
            <h4>
              Business Profile
            </h4>
          </Col>
          <Col><ClipLoader
            size={150}
            color={"#D0021B"}
            loading={this.state.loading}
          /></Col>
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
              {
                this.state.connectToPayme
                  ? <p className="pt-3" style={{ color: 'green' }}>Connected!</p>
                  : <Nav.Link className="pt-3" href="" style={{ color: 'red', textDecoration: 'underline' }}>Your PayMe for Business profile</Nav.Link>
              }
            </Col>
            <Col md={4}>
              <Image style={{ width: 60, height: 60, float: 'left' }} src={SFImg} rounded />
              {
                this.state.connectToSF
                  ? <p className="pt-3" style={{ color: 'green' }}>Connected!</p>
                  : <Nav.Link className="pt-3" href="" style={{ color: 'red', textDecoration: 'underline' }}>Your SF Express profile</Nav.Link>
              }

            </Col>
            <Col md={4}>
              <Image style={{ width: 60, height: 60, float: 'left' }} src={xero} rounded />
              {
                this.state.connectToXero
                  ? <p className="pt-3" style={{ color: 'green' }}>Connected!</p>
                  : <Nav.Link className="pt-3" style={{ color: 'red', textDecoration: 'underline' }}>Your Xero for Business profile</Nav.Link>
              }

            </Col>
          </Row>

        </div>


        <hr />

        <Row>
          <Col>
            <p style={{ textAlign: 'right', color: 'lightgreen' }}>
              <span style={{ color: 'black' }}>Mandatory Fields</span>
              : 10 / 20
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <label htmlFor="basic-url"><h5>Applicant Full Name*:</h5></label>
            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon3" value="Vicky Zhang" />
            </InputGroup>
          </Col>
          <Col md={6}>
            <label htmlFor="basic-url"><h5>Contact Email*:</h5></label>
            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon3" value="vickyzhang@gmail.com" />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row className='align-items-start'>
              <label htmlFor="basic-url"><h5>Registered Business Name*:</h5></label>
              <Image height='24' src={tick}/>
            </Row>
            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon3" value="Vicky Chinese Food (HK) Limited" />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col xl={2} lg={4} md={6}>
            <label htmlFor="basic-url"><h6>Company Logo</h6></label>
            <Image style={{ width: '100%', height: 150, }} src={upload1Img} thumbnail />
          </Col>
          <Col xl={2} lg={4} md={6}>
            <label htmlFor="basic-url"><h6>Product Photos</h6></label>
            <Image style={{ width: '100%', height: 150, }} src={upload1Img} thumbnail />
          </Col>
          <Col xl={2} lg={4} md={6}>
            <label htmlFor="basic-url"><h6>Identity Proof</h6></label>
            <Image style={{ width: '100%', height: 150, }} src={upload2Img} thumbnail />
          </Col>
          <Col xl={2} lg={4} md={6}>
            <label htmlFor="basic-url"><h6>Residence Proof</h6></label>
            <Image style={{ width: '100%', height: 150, }} src={upload3Img} thumbnail />
          </Col>
          <Col xl={2} lg={4} md={6}>
            <label htmlFor="basic-url"><h6>Audited Statement</h6></label>
            <Image style={{ width: '100%', height: 150, }} src={upload1Img} thumbnail />
          </Col>
          <Col xl={2} lg={4} md={6}>
            <label htmlFor="basic-url"><h6>Other Documents</h6></label>
            <Image style={{ width: '100%', height: 150, }} src={upload1Img} thumbnail />
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs={2}><Button style={this.styles.buttonStyle} variant="danger" href="/p2blanding">Back</Button></Col>
          <Col style={{ paddingTop: 10 }} xs={8}>
            <ProgressIndicator currentStepName='step-1' >
              <ProgressStep name="step-1" />
              <ProgressStep name="step-2" />
              <ProgressStep name="step-3" />
            </ProgressIndicator>
            <p style={{ textAlign: "center" }}>Registration</p>
          </Col>
          <Col xs={2}><Button style={this.styles.buttonStyle} variant="danger" href="/p2binput">Next</Button></Col>
        </Row>
      </Container>
    );
  }
}
