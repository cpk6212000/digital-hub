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
import wechatImg from '../asset/wechatImg.png'
import tickImg from '../asset/tickImg.png'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'


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

        <div style={{ margin: 10, backgroundColor: 'white'}}>

        <Row className="">
          <Col>
            <p>Skip some questions and file uploads, by connecting: (you can connect to more than 1 of them)</p>
          </Col>
        </Row>

        <Row className="">
          <Col md={4}>
            <Image style={{ width: 60, height: 60, float: 'left' }} src={paymeImg} rounded />
            <Nav.Link className="pt-3" href="https://login.xero.com/identity/connect/authorize?response_type=code&client_id=B70BBE3FF3704DA0BC5F3CCDCBEB7476&redirect_uri=https://hackademy-2020-290908.df.r.appspot.com/&scope=openid profile email accounting.transactions&state=123" style={{ color: 'red', textDecoration: 'underline'}}>Your PayMe for Business profile</Nav.Link>
          </Col>
          <Col md={4}>
            <Image style={{ width: 60, height: 60, float: 'left'  }} src={SFImg} rounded />
            <Nav.Link className="pt-3" href="" style={{ color: 'red', textDecoration: 'underline'}}>Your SF Express profile</Nav.Link>
          </Col>
          <Col md={4}>
            <Image style={{ width: 60, height: 60, float: 'left'  }} src={wechatImg} rounded />
            <Nav.Link className="pt-3" href="" style={{ color: 'red', textDecoration: 'underline' }}>Your WeChat for Business profile</Nav.Link>
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
            <ProgressIndicator currentStepName='step-2' style={{borderColor: 'red'}}>
              <ProgressStep name="step-1" style={{borderColor: 'red'}}/>
              <ProgressStep name="step-2" />
              <ProgressStep name="step-3" />
              <ProgressStep name="step-4" />
            </ProgressIndicator>
            <p style={{textAlign:"center"}}>Request Detail</p>
          </Col>
          <Col><Button style={this.styles.buttonStyle} variant="danger" href="/p2binput">Next</Button></Col>
        </Row>
      </Container>
    );
  }
}
