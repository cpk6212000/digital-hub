import React from 'react'
import { Container, Row, InputGroup, FormControl} from 'react-bootstrap'
import Radio from "@bit/mui-org.material-ui.radio";
import RadioGroup from "@bit/mui-org.material-ui.radio-group";
import FormControlLabel from "@bit/mui-org.material-ui.form-control-label";


const Question = ({question}) => {
    return (
        <Container>
            <Row>
                <h4>{question.question}</h4>
            </Row>
            <RadioGroup>
            {question.answers.map((answer) => (
            <Row>
                <FormControlLabel value={answer} control={<Radio color="primary" />} label={answer} labelPlacement="end" />
            </Row>))}
            </RadioGroup>
        </Container>
    )
}

export default Question
