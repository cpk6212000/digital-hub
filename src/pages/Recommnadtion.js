import React from 'react'
import { Container, Row, Col, Image, Card} from 'react-bootstrap';
import tips from '../asset/tips.png';
import loan from '../asset/loan4M.png';
import repay1 from '../asset/5yrs_repay.png';
import styled from 'styled-components';
import tick from '../asset/tick.png';
import repay2 from '../asset/3yrs_repay.png';
import interest_rate from '../asset/interest_rate.png';
import fast from '../asset/fast.png';
import { Link } from 'react-router-dom';
const LeadText = styled.p`
    font-size: 1.25em;
`
const SmallText = styled.p`
    font-size: 0.7em;
    margin-bottom: 0;
`
const StyledLink = styled(Link)`
    color: #000;
    &:hover {
    color: #000;
    text-decoration: unset
  }
`

const Info = ({src,children}) => {
    console.log(children)
    return(
        <Col md={4}>
            <Row>
                <Col md={4}>
                    <Image src={src} />
                </Col>
                <Col>
        <p>{children}</p>
                </Col>
            </Row>
        </Col>
)};

const ListItem = ({children}) => (
    <Row className='align-items-center mb-1'>
        <Col md={2}>
            <Image src={tick} responsive width='20'/>
        </Col>
        <Col>
            <SmallText>{children}</SmallText>
        </Col>
    </Row>
)

function Recommnadtion() {
    return (
        <Container>
            <Row className='mb-3'>
                <Col md={1}>
                    <Image src={tips} responsive></Image>
                </Col>
                <Col><h2>Here is our Recommendations:</h2></Col>
            </Row>
            <Row className='mb-1'>
                <Col><LeadText>We recommend you to apply:</LeadText></Col>
            </Row>
            <Row className='mb-3'>
                <StyledLink to='/p2blanding'>
                    <Card className='shadow mb-3 bg-white rounded flex-fill'>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title>P2B Crowd Lending </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Faster and innovative to get certain financing within a short period.</Card.Subtitle>
                                    <Row>
                                        <Info src={loan}>Term loan facility up to HK$4,000,000</Info>
                                        <Info src={fast}>Time to cash within couple of days</Info>
                                        <Info src={repay1}>Repayment period up to 5 years</Info>
                                    </Row>
                                </Col>
                                <Col md={2}>
                                    <LeadText>Eligibility:</LeadText>
                                    <ListItem>Operating and registered in HK</ListItem>
                                    <ListItem>Business Registration Certificate</ListItem>
                                    <ListItem>Not a listed company, lending institution</ListItem>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </StyledLink>
            </Row>
            <Row className='mb-1'>
                <Col><LeadText>However, you may also be interested in:</LeadText></Col>
            </Row>
            <Row className='mb-3'>
                <Card className='shadow mb-3 bg-white rounded flex-fill'>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>100% Guarentee Loan under SME Financing Gurantee Scheme</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">A new 100% guarantee financing solution provided by HKMC Insurance Limited (HKMCI).</Card.Subtitle>
                                <Row>
                                    <Info src={loan}>Term loan facility up to HK$4,000,000</Info>
                                    <Info src={repay2}>Repayment period up to 3 years</Info>
                                    <Info src={interest_rate}>Interest rate 2.75% p.a.</Info>
                                </Row>
                            </Col>
                            <Col md={2}>
                                <LeadText>Eligibility:</LeadText>
                                <ListItem>Operating and registered in HK</ListItem>
                                <ListItem>Business Registration Certificate</ListItem>
                                <ListItem>Not a listed company, lending institution</ListItem>
                                <ListItem>With at least 30% decline in sales turnover since Feb 2020</ListItem>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Recommnadtion
