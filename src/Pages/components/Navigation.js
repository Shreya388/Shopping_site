import React from "react";
import {Container, Button, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


function Navigation(){
    return (
        <Navbar bg="dark" lg="collapse">

            <Container>
            <Navbar.Brand className="text-white">Random</Navbar.Brand>

                
                <input type="text" />

                <Nav className="me-auto">
                    <LinkContainer to="/" exact={true}>
                        <Nav.Link className="text-white">Home</Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to="/women">
                        <Nav.Link className="text-white">Women</Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to="/men">
                        <Nav.Link className="text-white">Men</Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to="/kids">
                        <Nav.Link className="text-white">Kids</Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to="/electronics">
                        <Nav.Link className="text-white">Electronics</Nav.Link>
                    </LinkContainer>
                </Nav>

                <Button>Log In</Button>
            </Container>
        </Navbar>
    )
}

export default Navigation;