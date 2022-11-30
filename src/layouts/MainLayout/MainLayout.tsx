import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from '../../pages/Sidebar/Sidebar.js'

import { Outlet } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap'

function MainLayout() {
    return (
        <>
            <Header />
                <Container>
                    <Row>
                        <Col lg={2}>
                            <Sidebar />
                            sdsd
                        </Col>
                        <Col lg={10}>
                            <Outlet />
                        </Col>
                    </Row>

                </Container>
            <Footer />
        </>
    )
}

export default MainLayout   