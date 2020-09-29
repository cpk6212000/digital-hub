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

export default class P2BInputInfoPage extends React.Component {
    state = {
      currency: 'HKD'
    }

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
              <Col md={6}>
                  <label htmlFor="basic-url">Target Funding:</label>
                  <InputGroup className="mb-3">
                    <DropdownButton
                      as={InputGroup.Prepend}
                      variant="outline-secondary"
                      title={this.state.currency}
                      id="input-group-dropdown-1"
                    >
                      <Dropdown.Item href="#">HKD</Dropdown.Item>
                      <Dropdown.Item href="#">USD</Dropdown.Item>
                      <Dropdown.Item href="#">SGD</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-describedby="basic-addon1" />
                  </InputGroup>
              </Col>
              <Col md={6}>
                  <label htmlFor="basic-url">Payback Period (Years):</label>
                  <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon3" />
                  </InputGroup>
              </Col>
          </Row>

          <Row>
              <Col>
                  <label htmlFor="basic-url">Purpose of Funding:</label>
                  <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon3" />
                  </InputGroup>
              </Col>
          </Row>

          <Row>
              <Col>
                  <label htmlFor="basic-url">Message to Investors:</label>
                  <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon3" />
                  </InputGroup>
              </Col>
          </Row>

          <hr />

          <Row>
            <Col><Button style={this.styles.buttonStyle} variant="danger" href="/p2bupload">Back</Button></Col>
            <Col style={{ paddingTop: 10}} xs={6}><ProgressBar now={50} /></Col>
            <Col><Button style={this.styles.buttonStyle}  variant="danger" href="/p2bconfirm">Next</Button></Col>
          </Row>
        </Container>
      );
    }
}