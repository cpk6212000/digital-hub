import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class P2BInputInfoPage extends React.Component {
    render() {
      return (
        <Container fluid>
          <Row>
            <Col><h3>P2B Crowd-lending</h3></Col>
          </Row>
          <Row>
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
            <Col><h3>Create a new request in less than 10 mins!</h3></Col>
          </Row>
          <Row>
            <Col>
              <p>To Ensure a smooth application process, you may prepare the following documents in advance:</p>
              <ol>
                <li>Proof of Identity</li>
                <li>Proof of Residence</li>
                <li>Bank statement of the previous 6 months</li>
                <li>Audited Financial Statements</li>
                <li>Other Mandatory Documents (i.e. Sole Prop. Declaration Or Certified Copy of Partnership Deed)</li>
              </ol>
            </Col>
            <Col><Button variant="danger" href="/p2bupload">Begin</Button></Col>
          </Row>

          <hr /> 
          <Row>
            <Col><h3>OR</h3></Col>
          </Row>

          <Row>
            <Col><Button variant="danger">Use Existing Profile</Button></Col>
          </Row>

          <Row>
            <Col><small>The P2B Crowd-lending service is operated under Securities and Future Ordiance(‘SFO’) 103(2) by Securities and Futures Commission which allows small-scale retail crowdfunding not exceedding HKD 5 Milllions over a 12 months period in Hong Kong.</small></Col>
          </Row>
        </Container>
      );
    }
}