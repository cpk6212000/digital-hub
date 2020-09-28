import React from 'react';
import { Card, Button } from 'react-bootstrap'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import dloan from './asset/dloan_icon.png'
import crowlend from './asset/crowlend_icon.png'
import strategic from './asset/strapart_icon.png'

const StyledCard = styled(Card)`
    margin: auto 10px;
    flex: 1;
    background-color: ${props => props.bg};
    border-radius: 1.5;
    border: 0;
`;

const StyledCardBody = styled(Card.Body)`
    color: #000;
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  align-items: stretch;
`;
export const Home = (props) => (
    <Wrapper>
        <StyledCard bg='#E8EBF7'>
            <Link>
                <StyledCardBody>
                    <Card.Title>Digital Loan Journey</Card.Title>
                    <Card.Text>
                        Say bye-bye to the traditional approach and apply for loans within a few clicks!
                    </Card.Text>
                </StyledCardBody>
                <Card.Img variant="bottom" src={dloan} />
            </Link>
        </StyledCard>

        <StyledCard bg='#ACBED8'>
            <Link to='/crowd-lending'>
                <StyledCardBody>
                    <Card.Title>Crowd Lending</Card.Title>
                    <Card.Text>
                        Get funding from the crowd- check this out now!
                </Card.Text>
                </StyledCardBody>
                <Card.Img variant="bottom" src={crowlend} />
            </Link>
        </StyledCard>


        <StyledCard bg='#F2D398'>
            <Link>
                <StyledCardBody>
                    <Card.Title>Strategic Partnership</Card.Title>
                    <Card.Text>
                        Find your partnerships in our Market Place right away!
                    </Card.Text>
                </StyledCardBody>
                <Card.Img variant="bottom" src={strategic} />
            </Link>
        </StyledCard>

    </Wrapper>

)
