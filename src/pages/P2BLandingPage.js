import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
        <Container fluid>
          <Row className="pb-3">
            <Col><h3>P2B Crowd-lending</h3></Col>
          </Row>
          <Row className="p-2">
            <Col><p>Registration</p></Col>
            <Col><p>Submission</p></Col>
            <Col><p>Review & Approval</p></Col>
            <Col><p>Publish</p></Col>
            <Col><p>Get Funded</p></Col>
          </Row>
          <Row>
            <Col><ProgressBar now={0} /></Col>
          </Row>

          <br />

          <Row>
            <Col><h4>Create a new request in less than 10 mins!</h4></Col>
          </Row>
          <Row>
            <Col sm={10}>
              <p>To Ensure a smooth application process, you may prepare the following documents in advance:</p>
              <ol>
                <li>Proof of Identity</li>
                <li>Proof of Residence</li>
                <li>Bank statement of the previous 6 months</li>
                <li>Audited Financial Statements</li>
                <li>Other Mandatory Documents (i.e. Sole Prop. Declaration Or Certified Copy of Partnership Deed)</li>
              </ol>
            </Col>
            <Col sm={2}><Button style={this.styles.buttonStyle} variant="danger" href="/p2bupload">Begin</Button></Col>
          </Row>

          <hr /> 
          <Row className="justify-content-md-center">
            <Col md="auto"><h4>OR</h4></Col>
          </Row>

          <Row className="justify-content-md-center p-2">
            <Col md="auto"><Button style={this.styles.buttonStyle} variant="danger">Use Existing Profile</Button></Col>
          </Row>

          <Row className="justify-content-md-center p-2">
            <Col md="auto" className="text-center text-secondary"><small>The P2B Crowd-lending service is operated under Securities and Future Ordiance(‘SFO’) 103(2) by Securities and Futures Commission which allows small-scale retail crowdfunding not exceedding HKD 5 Milllions over a 12 months period in Hong Kong.</small></Col>
          </Row>
        </Container>
      );
    }
}