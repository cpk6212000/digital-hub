import React, { useState } from 'react';
import { Container, Image } from 'react-bootstrap'
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
import SlidingPanel from 'react-sliding-side-panel';
import discountImage from '../asset/50%off.png'

const CenterText = styled.p`
  text-align: center;
  font-size: 1em;
  margin-bottom: 0;
`

const VendorIcon = ({ src, children }) => (
  <Col className='shadow m-2 bg-white rounded'>
    <Image src={src} />
    <p>{children}</p>
  </Col>
);

const CloseButton = styled.div`
    position: relative;
    background: none;
    color: black;
    top: -10px;
    right: 10px;
`

const Highlight = styled.span`
  background: black;
  color: white;
  font-weight: bold;
`


export default class P2BAcknowledgePage extends React.Component {

  styles = {
    buttonStyle: {
      backgroundColor: 'red',
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 0
    }
  }

  state = {
    openPanel: false
  }

  componentDidMount() {
    this.setState({
      openPanel: true
    })
  }

  render() {
    const openPanel = this.state.openPanel
    return (
      <Container>
        <Row className='justify-content-center'>
          <Image src={tick} />
        </Row>
        <Row className='justify-content-center'>
          <Col><h3 style={{ textAlign: "center" }}>Thank you</h3></Col>
        </Row>

        <Row className='justify-content-center mb-5'>
          <Col><CenterText>Your application has been well-received and is now pending our further review.</CenterText></Col>
        </Row>

        <Row>
          <Col><h3 style={{ textAlign: "center" }}>Ref.: CL-0001</h3></Col>
        </Row>

        <Row className='mb-5'>
          <Col><CenterText>We will notify you of the result in due course. Meanwhile, you may use the above case reference number to track the progress at any time.</CenterText></Col>
        </Row>

        {/* <Row>
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
        </Row> */}

        <hr />

        <Row>
          <Col xs={2}><Button style={this.styles.buttonStyle} variant="danger" href="/">Home</Button></Col>
          <Col xs={8} style={{ paddingTop: 10 }}>
            <ProgressIndicator currentStepName='step-4'>
              <ProgressStep name="step-1" />
              <ProgressStep name="step-2" />
              <ProgressStep name="step-3" />
            </ProgressIndicator>
            <p style={{ textAlign: "center" }}>Acknowledgement</p>
          </Col>
          <Col xs={2}><Button style={this.styles.buttonStyle} variant="danger" href="/dashboard" >Dashboard</Button></Col>
        </Row>
        <SlidingPanel
          type={'bottom'}
          isOpen={openPanel}
          size={30}
        >
          <Container className='shadow m-0 p-3 bg-white rounded' fluid style={{backgroundImage: `url(${discountImage})`, backgroundPosition: 'left top', backgroundRepeat: "no-repeat"}}> 
            <Row className='mb-3'>
              <Col md={2}></Col>
              <Col>
                <CenterText style={{ fontWeight: "bold" }}>Want to add some flavors to your company?</CenterText>
                <CenterText>We’ve prepared some exclusive offers for you!</CenterText>
              </Col>
              <Col md={2}>
                <Button variant='warning'>Valid for <Highlight>2</Highlight>&nbsp;<Highlight>4</Highlight> hour</Button>
              </Col>
              <CloseButton onClick={() => this.setState({openPanel:false})}>X</CloseButton>
            </Row>
            <Row className='justify-content-center mb-3'>
              <Col className='align-items-center'>
                <Image src={partner1} />
              </Col>
              <Col className='align-items-center'>
                <Image src={partner2} />
              </Col>
              <Col className='align-items-center'>
                <Image src={partner3} />
              </Col>
              <Col className='align-items-center'>
                <Image src={partner4} />
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Button variant='danger'>Claim your offers!</Button>
            </Row>
          </Container>
        </SlidingPanel>
      </Container>
    );
  }
}