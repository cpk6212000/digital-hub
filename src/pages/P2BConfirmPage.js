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
      <Container>

        <Row className="justify-content-sm-center">
          <Col className="text-center"><h2>Application Summary</h2></Col>
        </Row>

        <div>
        <Row className="pt-2">
            <Col md={6}>
                <label htmlFor="basic-url"><h5>Applicant Full Name:</h5></label>
                <InputGroup className="mb-3">
                  <FormControl disabled aria-describedby="basic-addon3" value="Vicky Zhang" />
                </InputGroup>
            </Col>
            <Col md={6}>
                <label htmlFor="basic-url"><h5>Contact Email:</h5></label>
                <InputGroup className="mb-3">
                  <FormControl disabled aria-describedby="basic-addon3" value="vickyzhang@gmail.com" />
                </InputGroup>
            </Col>
            <Col md={12}>
                <label htmlFor="basic-url"><h5>Registered Business Name:</h5></label>
                <InputGroup className="mb-3">
                  <FormControl disabled aria-describedby="basic-addon3" value="Vicky Chinese Food (HK) Limited" />
                </InputGroup>
            </Col>
        </Row>

        <Row>
            <Col md={6}>
                <label htmlFor="basic-url"><h5>Attachments:</h5></label>
                <ol>
                  <li><Button size="sm" variant="link">HKID 2020.jpg</Button></li>
                  <li><Button size="sm" variant="link">Address 2020.jpg</Button></li>
                  <li><Button size="sm" variant="link">Settlement 2020.jpg</Button></li>
                  <li><Button size="sm" variant="link">Declaration 2020.jpg</Button></li>
                </ol>
            </Col>
            <Col md={6}>
                <label htmlFor="basic-url"><h5>Target Funding:</h5></label>
                <InputGroup className="mb-3">
                  <FormControl disabled aria-describedby="basic-addon3" value="HKD 3,000,000" />
                </InputGroup>
                <label htmlFor="basic-url"><h5>Payback Period (Years):</h5></label>
                <InputGroup className="mb-3">
                  <FormControl disabled aria-describedby="basic-addon3" value="5 years" />
                </InputGroup>
            </Col>

            
        </Row>

        <Row>

        <Col md={6}>
            <label htmlFor="basic-url"><h5>Purpose of Funding</h5></label>
            <InputGroup className="mb-3">
              <FormControl disabled aria-describedby="basic-addon3" as="textarea" rows={5}
                value="1. start up a business, eg pay for premises, new equipment and advertising
                2. run the business, eg having enough cash to pay staff wages and suppliers on time
                3. expand the business, eg having funds to pay for a new branch in a different city or country"
              />
             </InputGroup>
        </Col>

        <Col md={6}>
           <label htmlFor="basic-url"><h5>Message to Investors</h5></label>
           <InputGroup className="mb-3">
             <FormControl disabled aria-describedby="basic-addon3" as="textarea" rows={5}
               value="There are many sources to our success. We achieved growth by gaining market share in mature but relatively saturated markets and through strategic expansion in selected regions. In Germany, for example, we grew by 15% – the rest of the market by 4%. Not only is our German life insurance business continuing its success story; also, our Property-Casualty segment can grow its customer base after several years of stagnation."
             />
          </InputGroup>
        </Col>

        </Row>

          <Row>
              <Col md={6}>
                  <label htmlFor="basic-url"><h5>Describe your team / start-up</h5></label>
                  <InputGroup className="mb-3">
                    <FormControl disabled aria-describedby="basic-addon3" as="textarea" rows={5}
                      value=""
                    />
                  </InputGroup>
              </Col>
              <Col md={6}>
                <label htmlFor="basic-url"><h5>Describe your product / service</h5></label>
                  <InputGroup className="mb-3">
                    <FormControl disabled aria-describedby="basic-addon3" as="textarea" rows={5}
                      value=""
                    />
                  </InputGroup>
              </Col>
          </Row>

          <Row>
            <Col md={6}>
              <label htmlFor="basic-url"><h5>Picture of your team / start-up</h5></label>
              <ol>
                <li>team.png</li>
              </ol>
            </Col>
            <Col md={6}>
              <label htmlFor="basic-url"><h5>Picture(s) of your product / service</h5></label>
              <ol>
                <li>service.png</li>
              </ol>
            </Col>
          </Row>
        </div>

        <hr />

        <Row>
          <Col xs={2}><Button style={this.styles.buttonStyle} variant="danger" href="/p2binput">Back</Button></Col>
          <Col style={{ paddingTop: 10}} xs={8}>
          <ProgressIndicator currentStepName='step-2'>
              <ProgressStep name="step-1" />
              <ProgressStep name="step-2" />
              <ProgressStep name="step-3" />
            </ProgressIndicator>
            <p style={{textAlign:"center"}}>Summary</p>
          </Col>
          <Col xs={2}><Button className='ml-auto' style={this.styles.buttonStyle} variant="danger" href="/p2backnowledge">Submit</Button></Col>
        </Row>
      </Container>
    );
  }
}