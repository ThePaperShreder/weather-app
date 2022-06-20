import React from "react";
import NavComponent from "./NavComponent";
import FormComponent from "./FormComponent";
import { Accordion } from 'react-bootstrap';



export default function HeaderComponent(props) {
    return (
        <>
            <NavComponent />
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Settings</Accordion.Header>
                    <Accordion.Body>
                        <FormComponent {...props} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}
