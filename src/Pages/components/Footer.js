import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer(){
    return (
        <div className ="bg-dark text-white" style={{padding: "50pt", position: "absolute", bottom:"0", left:"0", right: "0"}}>
            <Container>
                <Row> 
                    <Col xs="4">
                        
                        <h6>Help</h6>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        
                       
                    </Col>
                    <Col xs="4">
                    
                        <h6>About</h6>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        
                    </Col>
                    <Col xs="4">
                    
                        <h6>Policy</h6>
                        <p>dummy text</p>
                        <p>dummy text</p>
                        <p>dummy text</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;