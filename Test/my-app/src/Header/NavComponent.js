import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function NavComponent() {


    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Weather App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
