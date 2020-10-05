import React from 'react';
import { Card, Button, Row, Container, Col, Image} from 'react-bootstrap'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import dloan from './asset/dloan_icon.png'
import crowlend from './asset/crowlend_icon.png'
import strategic from './asset/strapart_icon.png'
import bg from './asset/bg.png'

const StyledCard = styled(Card)`
    margin: 1em 4em;
    flex: 1;
    background-color: ${props => props.bg};
    border-radius: 1.5;
    border: 0;
`;

const StyledCardBody = styled(Card.Body)`
    color: #000;
`
const StyledLink = styled(Link)`
    color: #000;
    &:hover {
    color: #000;
    text-decoration: unset
  }
`
const Wrapper = styled(Container)`
    background-image: url(${bg});
`

export const Home = (props) => (
    <Container>
        <Row>
            <Col>
                <h1 style={{textAlign:'center'}}>Want to boost your business?</h1>
                <h1 style={{textAlign:'center'}}>&nbsp;	&nbsp;	&nbsp;	&nbsp;&nbsp;&nbsp;	&nbsp;	&nbsp;We are here to help you!</h1>
            </Col>
        </Row>
        <Row className='align-items-stretch'>
        <StyledCard className='shadow mb-3 rounded' bg='#E8EBF7'>
            <StyledLink to='/recommendation'>
                <Card.Body>
                    <Card.Title>Get your financing</Card.Title>
                    <Card.Text>
                        Say bye-bye to the traditional approach and apply for financing within a few clicks!
                    </Card.Text>
                </Card.Body>
                <Container>
                <Row className='justify-content-center'>
                    <Image src={dloan} />
                </Row>
                </Container>
            </StyledLink>
        </StyledCard>

        <StyledCard className='shadow mb-3 rounded' bg='#F2D398'>
            <StyledLink>
                <Card.Body>
                    <Card.Title>Strategic Partnership</Card.Title>
                    <Card.Text>
                        Find your partnerships in our Market Place right away!
                    </Card.Text>
                </Card.Body>
                <Container>
                    <Row className='justify-content-center'>
                        <Image src={strategic} />
                    </Row>
                </Container>
            </StyledLink>
        </StyledCard>
        </Row>

    </Container>

)
