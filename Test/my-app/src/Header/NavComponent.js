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

{/* Link zapuskaet obrabotku pravelnogo componenta 
bez link terjaetsa smisl react route, tak kak obichnii alink
perezapuskaet vsju stranitsu */}
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/current/0">Tallinn</Link>
                        <Link className="nav-link" to="/current/1">Tartu</Link>
                        <Link className="nav-link" to="/current/2">Kuressaare</Link>
                        <Link className="nav-link" to="/current/3">Valga</Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
