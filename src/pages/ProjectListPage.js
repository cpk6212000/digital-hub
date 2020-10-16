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
import Button from 'react-bootstrap/Button'

export default class ProjectListPage extends React.Component {

    render() {
      return (
        <Container>
            <Row className="pb-3">
                <Col><h2>Crowd Lending Opportunities</h2></Col>
            </Row>

            <Row>
                <Col>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Sort By</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>A to Z</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Filter By</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>My Favourites</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Search</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardDeck> 
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xl={5}>
                                        <Card.Img className="mt-3" variant="top" src={projectImg} />
                                        <ProgressBar label={"75%"} variant="success" className="mb-3 mt-3" now={75} />
                                        <Button className="m-2" href="/projectdetail" style={{ fontSize: 12}} variant="danger" size="lg">
                                            <b>5 DAYS</b> <br/>
                                            (until offering closes)
                                        </Button>
                                    </Col>
                                    <Col xl={7}>
                                        <Card.Title style={{ color: 'red'}}>Rohit Chinese & Indian Food</Card.Title>
                                        <Card.Text style={{ fontSize: 12}}>
                                            <b>Rohit Chinese & Indian food is a chain store all over Asia Pacific region including India, Thailand, 
    Taiwan, and Hong Kong. It not only provides gourmet food but also all kinds of drinks.</b>
                                        </Card.Text>
                                        <Card.Text style={{ fontSize: 13}}>
                                            Target Amount: 4 M
                                            <br />Amount Raised: <b style={{ color: 'green'}}>3 M</b>
                                            <br /># of Investors: 21
                                            <br />(Potential) Interest Rate: 2.2 % p.a.
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xl={5}>
                                        <Card.Img className="mt-3" variant="top" src={projectImg2} />
                                        <ProgressBar label={"50%"} variant="warning" className="mb-3 mt-3" now={50} />
                                        <Button className="m-2" href="/projectdetail" style={{ fontSize: 12}} variant="danger" size="lg">
                                            <b>8 DAYS</b> <br/>
                                            (until offering closes)
                                        </Button>
                                    </Col>
                                    <Col xl={7}>
                                        <Card.Title style={{ color: 'red'}}>Vicky Fast Food</Card.Title>
                                        <Card.Text style={{ fontSize: 12}}>
                                            <b>Vicky was previosly a Michelin chef. But with the inspiration of bringing delicious meal to the  community, she opened her fast food restaurant at Tai Kok Tsui in 2019. </b>
                                        </Card.Text>
                                        <Card.Text style={{ fontSize: 13}}>
                                            Target Amount: 2 M
                                            <br />Amount Raised: <b style={{ color: 'orange'}}>1 M</b>
                                            <br /># of Investors: 8
                                            <br />(Potential) Interest Rate: 2.0 % p.a.
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>

            
        </Container>
      );
    }
}