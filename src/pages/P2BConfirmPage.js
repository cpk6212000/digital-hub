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
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ProgressStep from '@bit/nexxtway.react-rainbow.progress-step';
import ProgressIndicator from '@bit/nexxtway.react-rainbow.progress-indicator';


export default class P2BConfirmPage extends React.Component {
  
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
      <Container style={{ marginLeft: 20, marginRight: 20}}>

        <Row>
          <Col><h3>Application Summary</h3></Col>
        </Row>

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
            <Col md={6}>
                <label htmlFor="basic-url">Attachments:</label>
                <ol>
                  <li>HKID 2020.jpg</li>
                  <li>Address 2020.jpg</li>
                  <li>Settlement 2020.jpg</li>
                  <li>Declaration 2020.jpg</li>
                </ol>
            </Col>
            <Col md={6}>
                <label htmlFor="basic-url">Target Funding:</label>
                <InputGroup className="mb-3">
                  <FormControl aria-describedby="basic-addon3" />
                </InputGroup>
                <label htmlFor="basic-url">Payback Period (Years):</label>
                <InputGroup className="mb-3">
                  <FormControl aria-describedby="basic-addon3" />
                </InputGroup>
            </Col>
        </Row>

        <Row>
            <Col md={6}>
                <label htmlFor="basic-url">Purpose of Funding:</label>
                <InputGroup className="mb-3">
                  <FormControl aria-describedby="basic-addon3" />
                </InputGroup>
            </Col>
            <Col md={6}>
                <label htmlFor="basic-url">Message to Investors:</label>
                <InputGroup className="mb-3">
                  <FormControl aria-describedby="basic-addon3" />
                </InputGroup>
            </Col>
        </Row>

        <hr />

        <Row>
          <Col><Button style={this.styles.buttonStyle} variant="danger" href="/p2binput">Back</Button></Col>
          <Col style={{ paddingTop: 10}} xs={6}>
          <ProgressIndicator currentStepName='step-3'>
              <ProgressStep name="step-1" />
              <ProgressStep name="step-2" />
              <ProgressStep name="step-3" />
              <ProgressStep name="step-4" />
            </ProgressIndicator>
            <p style={{textAlign:"center"}}>Confirmation</p>
          </Col>
          <Col><Button style={this.styles.buttonStyle} variant="danger" href="/p2backnowledge">Next</Button></Col>
        </Row>
      </Container>
    );
  }
}