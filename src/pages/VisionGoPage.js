import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ProgressStep from '@bit/nexxtway.react-rainbow.progress-step';
import ProgressIndicator from '@bit/nexxtway.react-rainbow.progress-indicator';
import Image from 'react-bootstrap/Image'
import progressBarImg from '../asset/progressbar.png'
import paymeImg from '../asset/paymeImg.png'
import SFImg from '../asset/SFImg.png'
import visiongoImg from '../asset/visionGoImg.png'
import xero from '../asset/xero.png'

export default class VisionGoPage extends React.Component {


    render() {
      return (
        <Container>
            <Row>
                <Col>
                 <Image src={visiongoImg} fluid />
                </Col>
            </Row>
        </Container>
      );
    }
}