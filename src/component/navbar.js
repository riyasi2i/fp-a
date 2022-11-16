import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './navbar.css'
export default function Navbar() {
    return (
        <div className='top_navbar'>
            <Container>
                <Row>
                    <Col>
                     <h5>EMI Calculator </h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
