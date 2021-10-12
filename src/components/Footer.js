import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer(){
    return (
        <div className ="bg-dark text-white" style={{padding: "50pt"}}>
            <Container>
                <Row>
                    <Col xs="4">
                        <h3>Hello</h3>
                    </Col>
                    <Col xs="4">
                        <h3>Hello</h3>
                    </Col>
                    <Col xs="4">
                        <h3>Hello</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;