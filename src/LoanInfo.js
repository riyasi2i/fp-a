import React,{ useState} from 'react'
import { Col, Container, Form, Row,Button,InputGroup } from 'react-bootstrap'


export default function LoanInfo({ userInput }) {
    const [loanData,setLoanData] = useState({
        amount:0,
        month:0,
        interest:0,
    })
    const onChangeValue = (field) =>{
        setLoanData({...loanData,[field.target.name]:parseInt(field.target.value)})
    }
    const calculateData = () =>{
        userInput(loanData)
    }

  return (
    <div className='form-container'>
        <Container>
            <Row>
                <Col lg={3}>
                    <Form.Label htmlFor="loan-amnt">Loan Amount</Form.Label>
                    <Form.Control name="amount"  type="text" onChange={onChangeValue}  id="loan-amnt" placeholder='Enter load amount'  aria-describedby="passwordHelpBlock"/>
                </Col>
                <Col lg={3}>
                    <Form.Label htmlFor="month">Tenure Month</Form.Label>
                    <Form.Control  name="month"  type="text" onChange={onChangeValue}  id="month" placeholder='Enter Tenure Month'  aria-describedby="passwordHelpBlock"/>
                </Col>
            {/* </Row> */}
            {/* <Row className='d-flex align-items-center'> */}
                <Col lg={3}>
                <InputGroup className="mb-3">
                    <Form.Label htmlFor="loan-amnt" className='d-block w-100'>Interest % </Form.Label>
                    <Form.Control name="interest"  defaultValue={loanData.interest} onChange={onChangeValue} type="text"  id="loan-amnt" placeholder='Enter Interest'  aria-describedby="passwordHelpBlock"/>
                    <InputGroup.Text>%</InputGroup.Text>
                </InputGroup>
                </Col>
                <Col lg={3} className='mt-2' >
                <Button onClick={calculateData} variant="primary" className='w-100 d-block mt-4 primary__btn'>Calculate</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
