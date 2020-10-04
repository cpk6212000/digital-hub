import React from 'react'
import Question from '../components/Question';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import styled  from 'styled-components';
import checklist from '../asset/checklist.png';
import clock from '../asset/clock.png'

const questions = [
    {
        question: 'How long do you expect to recieve the cash?',
        answers: ['In couple of days', 'In couple of week', 'In couple of months']
    },
    {
        question: 'How much financing do you target to get?',
        answers: ['<10K', 'Between 10K to 1M','Between 1M to 5M', '>5M']
    },
    {
        question: 'Have your company successfully applied for business loans before?',
        answers: ['Yes', 'No']
    },
    {
        question: 'Have you had record of bankruptcy petition or proceedings before?',
        answers: ['Yes', 'No']
    },
    {
        leading:'We are close now.',
        question: 'Have the guarantors had records of bankruptcy petition or proceedings before?',
        answers: ['Yes', 'No']
    },
    {
        leading:'Just one more!',
        question: ' Have your companies got sued or involved in any legal issues before? ',
        answers: ['Yes', 'No']
    }
]

const questCol = styled(Col)`
    margin-left: 1em;
    margin-right: 1em;
`

function SurveryPage2() {
    return (
        <Container className='shadow mb-3 bg-white rounded'>
            <Row className='p-5 mb-5 bg-light'>
            <Col md={1}>
                <Image src={checklist}></Image>
            </Col>
            <Col >
                <h3>Last few questions...</h3>
            </Col>
            <Col md={1}>
                <Image src={clock}></Image>
            </Col>
            </Row>
            <Row className='p-5'>
                <Col>
                <Question question={questions[0]}/>
                </Col>
                <Col>
                <Question question={questions[1]}/>
                </Col>
            </Row>
            <Row className='p-5'>
                <Col>
                <Question question={questions[2]}/>
                </Col>
                <Col>
                <Question question={questions[3]}/>
                </Col>
            </Row>
            <Row>
            <Button className="mr-auto ml-3 mb-3" variant="secondary">Back</Button>
            <Button className="ml-auto mr-3 mb-3" variant="danger" href='/recommendation'>Finish</Button>
            </Row>
        </Container>
    )
}

export default SurveryPage2
