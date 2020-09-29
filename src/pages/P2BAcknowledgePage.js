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
      <Container style={{ marginLeft: 20, marginRight: 20}}>

        <Row>
          <Col><h3>Thank you</h3></Col>
        </Row>

        <Row>
          <Col><p>Your application has been well-received and is now pending our further review.</p></Col>
        </Row>

        <Row>
          <Col><h3>Ref.: CL-0001</h3></Col>
        </Row>

        <Row>
          <Col><p>We will notify you of the result in due course. Meanwhile, you may use the above case reference number to track the progress at any time.</p></Col>
        </Row>

        <hr />

        <Row>
          <Col><Button style={this.styles.buttonStyle} variant="danger" href="/p2bconfirm">Back</Button></Col>
          <Col xs={6} style={{ paddingTop: 10}}><ProgressBar now={100} /></Col>
          <Col><Button style={this.styles.buttonStyle} variant="danger" href="/p2blanding">Next</Button></Col>
        </Row>
      </Container>
    );
  }
}