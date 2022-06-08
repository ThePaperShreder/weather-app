import React, {useRef, useEffect} from "react";
import { Container, Form, Col, Row } from 'react-bootstrap';
import cities from './Cities.json';
import dataTypes from './type.json';

export default function FormComponent(props) {

  const formElement = useRef(null);

  useEffect(() => {
    if(props.form === null) {
      props.setForm({
        city: props.selectedCity,
        unit: props.unit,
        language: props.language,
      });
    }}
  );
  
 
  function OnInput () {

    formElement.current.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  }

  return (
        <Container>
            <Form ref={formElement} onInput={OnInput} onSubmit={props.handleOnSubmitForm}>
              <Row>
                  <Col>
                      <Form.Group className="mb-3" controlId="city">
                          <Form.Label>Choose city</Form.Label>
                          <Form.Select defaultValue={props.selectedCity} name="city" aria-label="Default select example">
                              <option>Open this select menu</option>
                              {cities.map((city, i) => 
                                      <option value={i} key={city.name}>{city.name}</option>
                                  )}                         
                          </Form.Select>
                      </Form.Group>
                  </Col>
                  <Col>
                      <Form.Group className="mb-3" controlId="language">
                          <Form.Label>Choose language</Form.Label>
                          <Form.Select defaultValue={props.language} name="language" aria-label="Default select example">
                              <option>Choose language</option>
                              {['en', 'fi', 'ru'].map(language => 
                                      <option key={language}>{language}</option>
                                  )}
                              
                          </Form.Select>
                      </Form.Group>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <Form.Group className="mb-3" controlId="dataType">
                          <Form.Label>Choose Data type</Form.Label>

                          {dataTypes.map(dtype => 
                                      <Form.Check 
                                      key={dtype.value}
                                      id={dtype.value}
                                      type="Checkbox"
                                      name="dataType"
                                      defaultChecked={props.dataTypes.value === dtype.value}
                                      label={dtype.label}
                                      defaultValue={dtype.value}
                                  />           
                          )}
                      </Form.Group>
                  </Col>
                  <Col>
                      <Form.Group controlId="unit">
                          <Form.Label>Choose unit</Form.Label>
                          {['standart', 'metric', 'imperial'].map(unit =>
                          <Form.Check
                              key={unit}
                              id={unit}
                              name="unit"
                              type='radio'
                              defaultChecked={props.unit === unit}
                              label={unit}
                              value={unit}
                          />
                          )}
                      </Form.Group>
                  </Col>
              </Row>
            </Form>
        </Container>
    )
}

FormComponent.defaultProps = {
    selectedCity: 0,
    language: "en",
    dataTypes: dataTypes.find(type => type.label === 'Daily'),
    unit: "metric",
}