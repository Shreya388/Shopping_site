import React from "react";
import {Container, Button, Form, Nav, Navbar} from "react-bootstrap";

function Navigation(){
    return (
        <Navbar bg="dark" lg="collapse">

            <Container>
            <Navbar.Brand className="text-white">Random</Navbar.Brand>
            <Button variant="primary" type="submit">Go</Button>
                <Form.Control type="text" placeholder="Enter email" style={{width:"400pt"}} />

                <Nav className="me-auto">
                    <Nav.Link className="text-white">Home</Nav.Link>
                    <Nav.Link className="text-white">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;