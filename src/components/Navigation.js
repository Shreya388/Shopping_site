import React from "react";
import {Container, Button, Form, Nav, Navbar} from "react-bootstrap";

function Navigation(){
    return (
        <Navbar bg="dark" lg="collapse">

            <Container>
            <Navbar.Brand className="text-white">Random</Navbar.Brand>
            <Button variant="primary" type="submit">Go</Button>
                <input type="text" />

                <Nav className="me-auto">
                    <Nav.Link className="text-white">Home</Nav.Link>
                    <Nav.Link className="text-white">Cart</Nav.Link>
                    
                </Nav>

                <Button>Log In</Button>
            </Container>
        </Navbar>
    )
}

export default Navigation;