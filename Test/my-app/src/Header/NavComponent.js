import React, { useState } from "react";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import cities from './Cities.json';

export default function NavComponent() {

    const [ sellectedCity, setSelectedCity ] = useState({city: "Choose city"});

    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Weather App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                    <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={sellectedCity.city}
                    menuVariant="dark"
                    >
                    {cities.map(city => 
                        <NavDropdown.Item onClick={() => setSelectedCity(city)}href="#action/3.1">{city.city}</NavDropdown.Item>
                    )}
                    
                    
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
