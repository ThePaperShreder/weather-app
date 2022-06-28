import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function NavComponent() {


    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/weather-app">Weather App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav className="me-auto" navbarScroll>

                        <Link className="nav-link" to="/weather-app">Home</Link>
                        <Link className="nav-link" to="/weather-app/forecast">Forecast</Link>
                        <Link className="nav-link" to="/weather-app/current/tallinn">Tallinn</Link>
                        <Link className="nav-link" to="/weather-app/current/tartu">Tartu</Link>
                        <Link className="nav-link" to="/weather-app/current/kuressaare">Kuressaare</Link>
                        <Link className="nav-link" to="/weather-app/current/valga">Valga</Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
