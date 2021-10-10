import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

function Navigation(){
    return (
        <Navbar bg="dark" lg="collapse">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link className="text-white">Home</Nav.Link>
                    <Nav.Link className="text-white">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;