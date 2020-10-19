import React from 'react';
import { Container, Image, Table } from 'react-bootstrap'
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
import Form from 'react-bootstrap/Form'
import upload1Img from '../asset/upload1Img.png'

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
      <Container>

        <Row>
          <Col md={6}>
            <label htmlFor="basic-url"><h5>Information about the Management </h5></label>
            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon3" as="textarea" rows={5}
                value=""
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <label htmlFor="basic-url"><h5>Brief History</h5></label>
            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon3" as="textarea" rows={5}
                value="" />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <label htmlFor="basic-url"><h5>Business Loan History</h5></label>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Lender Name</th>
                  <th>Total Amount of Loan</th>
                  <th>Rate of Interest</th>
                  <th>Maturity Date</th>
                  <th>Monthly Repayment</th>
                  <th>Outstanding Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Digital Lending Company</td>
                  <td>HKD 100,000</td>
                  <td>7%</td>
                  <td>31-05-2021</td>
                  <td>HKD 10,700</td>
                  <td>HKD 40,000</td>
                </tr>
              </tbody>
            </Table>
            <Button variant='success' style={{borderRadius: 100}}>+</Button>
          </Col>
        </Row>

        <Row className='justify-content-around'>
          <Col xl={2} lg={4} md={6}>
            <label htmlFor="basic-url"><h6>Company Logo</h6></label>
            <Image style={{ width: '100%', height: 150, }} src={upload1Img} thumbnail />
          </Col>
          <Col xl={2} lg={4} md={6}>
            <label htmlFor="basic-url"><h6>Product Photos</h6></label>
            <Image style={{ width: '100%', height: 150, }} src={upload1Img} thumbnail />
          </Col>
          <Col xl={2} lg={4} md={6}>
            <label htmlFor="basic-url"><h6>Audited Statement</h6></label>
            <Image style={{ width: '100%', height: 150, }} src={upload1Img} thumbnail />
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs={2}><Button style={this.styles.buttonStyle} variant="danger" href="/p2bupload">Back</Button></Col>
          <Col style={{ paddingTop: 10 }} xs={8}>
            <ProgressIndicator currentStepName='step-2'>
              <ProgressStep name="step-1" />
              <ProgressStep name="step-2" />
              <ProgressStep name="step-3" />
              <ProgressStep name="step-4" />
            </ProgressIndicator>
            <p style={{ textAlign: "center" }}>Company Info</p>
          </Col>
          <Col xs={2}><Button style={this.styles.buttonStyle} variant="danger" href="/p2binput">Next</Button></Col>
        </Row>
      </Container>
    );
  }
}