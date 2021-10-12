import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer(){
    return (
        <div className ="bg-dark text-white" style={{padding: "50pt"}}>
            <Container>
                <Row>
                    <Col xs="3">
                        <Container>
                        <h6>Help</h6>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        
                        </Container>
                    </Col>
                    <Col xs="3">
                    <Container>
                        <h6>About</h6>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        </Container>
                    </Col>
                    <Col xs="3">
                    <Container>
                        <h6>Policy</h6>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        </Container>
                    </Col>
                    <Col xs="3">
                        <Container>
                        <h6>Hello</h6>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;