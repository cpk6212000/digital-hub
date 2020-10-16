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
import chatImg from '../asset/chatImg.png'
import Button from 'react-bootstrap/Button'
import { AiFillHeart } from 'react-icons/ai';


export default class ProjectDetailPage extends React.Component {

    render() {
      return (
        <Container>

            <Row className="pb-3">
                <Col><Button href="/projectlist" variant="dark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button></Col>
            </Row>

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
                                    <Button style={{ fontSize: 12}} block className="mt-3" variant="danger">Invest</Button> 
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