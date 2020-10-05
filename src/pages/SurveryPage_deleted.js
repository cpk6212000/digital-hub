import React from 'react'
import Question from '../components/Question';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import styled  from 'styled-components';
import checklist from '../asset/checklist.png';
import clock from '../asset/clock.png'

const questions = [
    {
        leading: 'Lets start by understanding you!',
        question: 'Is your company operating and registered in Hong Kong?',
        answers: ['Yes', 'No']
    },
    {
        question: 'What industry is your company in?',
        answers: ['Manufacturing', 'Others']
    },
    {
        question: 'How many employees does your company have?',
        answers: ['<50', 'Between 50 to 100', 'Between 100 to 500', '> 500']
    },
    {
        question: 'Does your company have at least 3 years proven track financial records?',
        answers: ['Yes', 'No']
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

function SurveryPage() {
    return (
        <Container className='shadow mb-3 bg-white rounded'>
            <Row className='p-5 mb-5 bg-light'>
            <Col md={1}>
                <Image src={checklist}></Image>
            </Col>
            <Col >
                <h3>First, please complete a quick suvery:</h3>
                <p>This will helps us recommend the products that best fit you.</p>
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
            <Button className="ml-auto mr-3 mb-3" variant="danger" href='/survey2'>Next</Button>
            </Row>
        </Container>
    )
}

export default SurveryPage
