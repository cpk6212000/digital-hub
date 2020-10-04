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
import Form from 'react-bootstrap/Form'

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
              <Col md={6}>
                  <label htmlFor="basic-url"><h5>Target Funding:</h5></label>
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
                    <FormControl aria-describedby="basic-addon1" value="3,000,000" />
                  </InputGroup>
              </Col>
              <Col md={6}>
                  <label htmlFor="basic-url"><h5>Payback Period (Years):</h5></label>
                  <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon3" value="5"/>
                  </InputGroup>
              </Col>
          </Row>

          <Row>
              <Col md={6}>
                  <label htmlFor="basic-url"><h5>Purpose of Funding</h5></label>
                  <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon3" as="textarea" rows={3}
                      value="1. start up a business, eg pay for premises, new equipment and advertising
                      2. run the business, eg having enough cash to pay staff wages and suppliers on time
                      3. expand the business, eg having funds to pay for a new branch in a different city or country"
                    />
                  </InputGroup>
              </Col>
              <Col md={6}>
                <label htmlFor="basic-url"><h5>Message to Investors</h5></label>
                  <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon3" as="textarea" rows={3}
                      value="There are many sources to our success. We achieved growth by gaining market share in mature but relatively saturated markets and through strategic expansion in selected regions. In Germany, for example, we grew by 15% – the rest of the market by 4%. Not only is our German life insurance business continuing its success story; also, our Property-Casualty segment can grow its customer base after several years of stagnation."
                    />
                  </InputGroup>
              </Col>
          </Row>

          <Row>
              <Col md={6}>
                  <label htmlFor="basic-url"><h5>Describe your team / start-up</h5></label>
                  <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon3" as="textarea" rows={3}
                      value=""
                    />
                  </InputGroup>
              </Col>
              <Col md={6}>
                <label htmlFor="basic-url"><h5>Describe your product / service</h5></label>
                  <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon3" as="textarea" rows={3}
                      value=""
                    />
                  </InputGroup>
              </Col>
          </Row>

          <Row>
            <Col md={6}>
              <label htmlFor="basic-url"><h5>Upload a picture of your team / start-up</h5></label>
              <Form className="mb-3">
                <Form.File 
                  id="custom-file"
                  label="teampic.png"
                  data-browse="Upload"
                  custom
                />
              </Form>
            </Col>
            <Col md={6}>
              <label htmlFor="basic-url"><h5>Upload picture(s) of your product / service</h5></label>
              <Form className="mb-3">
                <Form.File 
                  id="custom-file"
                  label="service.png"
                  data-browse="Upload"
                  custom
                />
              </Form>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col><Button style={this.styles.buttonStyle} variant="danger" href="/p2bupload">Back</Button></Col>
            <Col style={{ paddingTop: 10}} xs={6}>
            <ProgressIndicator currentStepName='step-2'>
              <ProgressStep name="step-1" />
              <ProgressStep name="step-2" />
              <ProgressStep name="step-3" />
              <ProgressStep name="step-4" />
            </ProgressIndicator>
            <p style={{textAlign:"center"}}>Request Detail</p>
            </Col>
            <Col><Button style={this.styles.buttonStyle}  variant="danger" href="/p2bconfirm">Next</Button></Col>
          </Row>
        </Container>
      );
    }
}