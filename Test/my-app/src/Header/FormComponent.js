import React from "react";
import { Container, Form, Button } from 'react-bootstrap';
import cities from './Cities.json';
import dataTypes from './type.json';

export default function FormComponent(props) {

    
    return (
        <Container>
            <Form onSubmit={props.handleOnSubmitForm}>
            <Form.Group className="mb-3" controlId="dataType">
                    <Form.Label>Choose Data type</Form.Label>

                    {dataTypes.map(dtype => 
                                <Form.Check 
                                key={dtype.value}
                                type="Checkbox"
                                name="dataType"
                                defaultChecked={props.dataTypes.value === dtype.value}
                                label={dtype.label}
                                value={dtype.value}
                            />           
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="language">
                    <Form.Label>Choose language</Form.Label>
                    <Form.Select defaultValue={props.language} name="language" aria-label="Default select example">
                        <option>Choose language</option>
                        {['en', 'fi', 'ru'].map(language => 
                                <option key={language}>{language}</option>
                            )}
                        
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>Choose city</Form.Label>
                    <Form.Select defaultValue={props.selectedCity.name} name="city" aria-label="Default select example">
                        <option>Open this select menu</option>
                        {cities.map(city => 
                                <option key={city.name}>{city.name}</option>
                            )}
                        
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="unit">
                    <Form.Label>Choose unit</Form.Label>
                    {['standart', 'metric', 'imperial'].map(unit =>
                    <Form.Check
                        key={unit}
                        name="unit"
                        type='radio'
                        defaultChecked={props.unit === unit}
                        label={unit}
                        value={unit}
                    />
                    )}
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

FormComponent.defaultProps = {
    selectedCity: cities.find(city => city.name === 'Tallinn'),
    language: "en",
    dataTypes: dataTypes.find(type => type.label === 'Daily'),
    unit: "metric",
}