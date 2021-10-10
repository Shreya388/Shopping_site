import React from "react";
import {Container, Card, Col, Row} from 'react-bootstrap';

function Cover(){
    return (

        <div className="main">
        <div className="cover" style={{ paddingTop:"50pt", paddingBottom: "50pt", background: "#f1f1f1"}}>
            <Container>
                <Row>
                    <Col xs={2}>
                        <Card>fdsf</Card>
                    </Col>
                    <Col xs={2}>
                        <Card>dfsfasf</Card>
                    </Col>
                    <Col xs={2}>
                        <Card>sdad</Card>
                    </Col>
                    <Col xs={2}>
                        <Card>fdsfsf</Card>
                    </Col>
                    <Col xs={2}>
                        <Card>ffafaf</Card>
                    </Col>
                    <Col xs={2}>
                        <Card>dsaddada</Card>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="cover bg-dark" style={{ padding: "150pt", width: "100%"}}>
            <Container>
                <h1 className="text-white">Jfdsfdsfosaf</h1>
            </Container>
        </div>
        </div>
    )
}

export default Cover;