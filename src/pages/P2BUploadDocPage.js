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
      <Container style={{ marginLeft: 20, marginRight: 20}}>
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
              <Nav.Link href="" style={{ color: 'red'}}>Your PayMe for Business profile</Nav.Link>
            </Col>
            <Col md={4}>
              <Nav.Link href="" style={{ color: 'red'}}>Your SF Express profile</Nav.Link>
            </Col>
            <Col md={4}>
              <Nav.Link href="" style={{ color: 'red'}}>Your WeChat for Business profile</Nav.Link>
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
          <Col style={{ paddingTop: 10}} xs={6}><ProgressBar now={25} /></Col>
          <Col><Button style={this.styles.buttonStyle} variant="danger" href="/p2binput">Next</Button></Col>
        </Row>
      </Container>
    );
  }
}