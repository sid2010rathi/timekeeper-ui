import { Component } from "react";
import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Footer extends Component {

    constructor() {
        super()
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="#home">TimeKeeper</Navbar.Brand>

                        <Nav>
                            <Nav.Link href="#deets">This is footer.</Nav.Link>
                        </Nav>
                </Navbar>
            </Container>
        )
    }
}

export default Footer
