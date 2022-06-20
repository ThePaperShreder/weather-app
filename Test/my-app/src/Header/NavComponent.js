import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function NavComponent() {


    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Weather App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav className="me-auto" navbarScroll>

                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/current/tallinn">Tallinn</Link>
                        <Link className="nav-link" to="/current/tartu">Tartu</Link>
                        <Link className="nav-link" to="/current/kuressaare">Kuressaare</Link>
                        <Link className="nav-link" to="/current/valga">Valga</Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
