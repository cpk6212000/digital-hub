import React from 'react';
import {Container, Image} from 'react-bootstrap'
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
import tick from '../asset/tick.png';
import styled from 'styled-components';
import partner1 from '../asset/partner1.png';
import partner2 from '../asset/partner2.png';
import partner3 from '../asset/partner3.png';
import partner4 from '../asset/partner4.png';

const CenterText = styled.p`
  text-align: center;
`

const VendorIcon = ({src, children}) => (
  <Col className='shadow m-2 bg-white rounded'>
    <Image src={src} />
    <p>{children}</p>
  </Col>
);


export default class P2BAcknowledgePage extends React.Component {
  
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
        <Row className='justify-content-center'>
            <Image src={tick}/>
        </Row>
        <Row className='justify-content-center'>
          <Col><h3 style={{textAlign: "center"}}>Thank you</h3></Col>
        </Row>

        <Row className='justify-content-center'>
          <Col><CenterText>Your application has been well-received and is now pending our further review.</CenterText></Col>
        </Row>

        <Row>
          <Col><h3 style={{textAlign: "center"}}>Ref.: CL-0001</h3></Col>
        </Row>

        <Row className='mb-5'>
          <Col><CenterText>We will notify you of the result in due course. Meanwhile, you may use the above case reference number to track the progress at any time.</CenterText></Col>
        </Row>

        <Row>
          <Col><CenterText>Want to add some flavors to your company?
Try out selected software solutions from our Market Place!</CenterText></Col>
        </Row>

        <Row>
          <VendorIcon src={partner1}>The Easiest Way to Pay- Pay Invoices Directly From Your Accounting Software…</VendorIcon>
          <VendorIcon src={partner2}>The next generation of profit protection</VendorIcon>
          <VendorIcon src={partner3}>Accounting software for small business, that works anywhere you do.
</VendorIcon>
          <VendorIcon src={partner4}>Driving new customer growth through performance marketing
</VendorIcon>
        </Row>

        <hr />

        <Row>
          <Col><Button style={this.styles.buttonStyle} variant="danger" href="/p2bconfirm">Back</Button></Col>
          <Col xs={6} style={{ paddingTop: 10}}>
          <ProgressIndicator currentStepName='step-4'>
              <ProgressStep name="step-1" />
              <ProgressStep name="step-2" />
              <ProgressStep name="step-3" />
              <ProgressStep name="step-4" />
            </ProgressIndicator>
            <p style={{textAlign:"center"}}>Acknowledgement</p>
          </Col>
          <Col><Button style={this.styles.buttonStyle} variant="danger" href="/p2blanding">Next</Button></Col>
        </Row>
      </Container>
    );
  }
}