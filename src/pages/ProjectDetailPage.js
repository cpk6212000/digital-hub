import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ProgressBar from 'react-bootstrap/ProgressBar'
import projectImg from '../asset/projectImg.png'
import projectImg2 from '../asset/projectImg2.png'
import projectImg3 from '../asset/projectImg3.png'
import qrcodeImg from '../asset/qrcodeImg.png'
import chatImg from '../asset/chatImg.png'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { AiFillHeart } from 'react-icons/ai';
import Image from 'react-bootstrap/Image'

export default class ProjectDetailPage extends React.Component {

    state = {
        showPayment: false
    }

    handleOpen() {
        this.setState({
            showPayment: true
        })
    }

    handleClose() {
        this.setState({
            showPayment: false
        })
    }

    render() {
      return (
        <Container>

            <Row className="pb-3">
                <Col><Button href="/projectlist" variant="dark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button></Col>
            </Row>

            <Modal show={this.state.showPayment} onHide={() => this.setState({ showPayment: false})}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    Thanks for your support. Please choose the payment method: 
                    <br /><br />
                    <Button onClick={() => { this.setState({ showPayment: false, showQR: true})}}  block variant="outline-dark" size="lg" style={{ fontSize: 14}}>Bank Transfer</Button>
                    <br />
                    <Button onClick={() => { this.setState({ showPayment: false, showQR: true})}}  block variant="outline-dark" size="lg" style={{ fontSize: 14}}>FPS</Button>
                    <br />
                    <Button onClick={() => { this.setState({ showPayment: false, showQR: true})}}  block variant="outline-dark" size="lg" style={{ fontSize: 14}}>PayMe</Button>
                </Modal.Body>
            </Modal>

            <Modal show={this.state.showQR} onHide={() => this.setState({ showQR: false})}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    Please use your FPS to scan the below QR code and enter the amount and maybe a warm message to the shop owner Rohit: 
                    <br /><br />
                    <div style={{ display: 'flex', justifyContent: 'center'}}>
                        <Image md="auto" style={{ width: '50%', height: '50%' }} thumbnail src={qrcodeImg} />
                    </div>

                    <br /><br />

                    <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <Button onClick={() => { this.setState({ showQR: false})}}  variant="danger" size="lg" style={{ fontSize: 14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finish&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                    </div>

                </Modal.Body>
            </Modal>

            <Row>
                <Col>
                    <Card style={{ padding: 10}}>
                        <Card.Body>
                            <Row>
                                <Col lg={8}>
                                    <Card.Img className="mt-2" variant="top" src={projectImg} />
                                </Col>
                                <Col lg={4}>
                                    <Button style={{ fontSize: 12}} block className="mt-3" variant="primary"><AiFillHeart />&nbsp;Favourite</Button> 
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ fontSize: 12}}>
                                    <p className="mt-2 mb-3"><b>Enjoy a gourmet dish at Rohit Chinese & Indian Food!</b></p>
                                    <p>Rohit Chinese & Indian food is a chain store all over Asia Pacific region including India, Thailand, Taiwan, and Hong Kong. It not only provides gourmet food but also all kinds of drinks.</p>
                                    <p style={{ textAlign: 'right'}}>More details on Rohit Chinese & Indian Food’s website ></p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card style={{ marginTop: 20, marginBottom: 30, padding: 10}}>
                        <Card.Body>
                            <Row>
                                <Col lg={8}>
                                    <p style={{ fontSize: 14}} className="mt-3 mb-3"><b>Crowd Lending in Progress... 5 days left!</b></p>
                                </Col>
                                <Col lg={4}>
                                    <Button onClick={() => { this.setState({ showPayment: true})}} style={{ fontSize: 12}} block className="mt-3" variant="danger">Invest</Button> 
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col lg={5}>
                                    <ProgressBar label={"75%"} variant="success" className="mb-3 mt-3" now={75} />
                                </Col>
                                <Col lg={7} className="mt-3" style={{ fontSize: 12}}>
                                    Target Amount: <b>4 M</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Payback Period: <b>3 years</b>
                                    <br />Amount Raised: <b>3 M</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      
                                    No. of Investors: <b>21</b> 
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col lg={5}>
                                    <ProgressBar label={"200K"} variant="info" className="mb-3 mt-3" now={50} />
                                </Col>
                                <Col lg={7} className="mt-3" style={{ fontSize: 12}}>
                                    You invest: <b>200,000 HKD</b>
                                    <br />You will receive <b>5,930 HKD</b> per month for <b>3 years</b>.
                                    <br />In total, you will get <b>213,492</b> HKD. (<b>2.2%</b> p.a. return)
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={8}>
                                    <p style={{ fontSize: 14}}className="mt-3 mb-3"><b>Comments from the public:</b></p>
                                </Col>
                                <Col lg={4}>
                                    <Button style={{ fontSize: 12}} block className="mt-3" variant="outline-primary">Comment</Button> 
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col>
                                    <Card.Img className="m-2" variant="top" src={chatImg} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                </Col>
                <Col>
                    <Card>
                        <Card.Body style={{ fontSize: 12}}>
                            <h5>Message to the investors: </h5>
                            <p>Hi everyone, this is Rohit, the founder of Rohit Chinese & Indian Food. </p>
                            <p>Born in Bangalore, I grew up eating gourmet food from different places of the world.</p>
                            <p>But my favorite cuisines are definitely Chinese and Indian food.  </p>
                            <p>I opened my restaurant in HK this year because I want to bring good taste to the community. </p>
                            <p>If you would like to know more about my business and how I got started, please visit the Facebook page or the official website: www.rohitfood.com</p>
                            <p>Hope to get your support! </p>
                            <Card.Img className="m-2" variant="top" src={projectImg3} /> 
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
            
        </Container>
      );
    }
}