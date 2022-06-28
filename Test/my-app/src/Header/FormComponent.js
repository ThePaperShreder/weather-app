import React, {useRef, useEffect} from "react";
import { Container, Form, Col, Row } from 'react-bootstrap';
import cities from './Cities.json';
import dataTypes from './type.json';
import { useLocation } from 'react-router-dom';

export default function FormComponent(props) {

  const formElement = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if(props.form === null && !props.cookie) {
      props.setForm({
        city: props.selectedCity,
        unit: props.unit,
        language: props.language,
      });
      props.setCookie('weather', {
        city: props.selectedCity,
        unit: props.unit,
        language: props.language,
      })
    }
  });
  
 
  function OnInput () {

    formElement.current.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  }

  return (
        <Container>
            <Form method="GET" ref={formElement} onInput={OnInput} onSubmit={props.handleOnSubmitForm}>
              <Row>
                  <Col>
                      <Form.Group className="mb-3" controlId="city">
                          <Form.Label>Choose city</Form.Label>
                          <Form.Select disabled={!!location.pathname.match('current')} defaultValue={(props.cookie || {}).city || props.selectedCity} name="city" aria-label="Default select example">
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
                          <Form.Select defaultValue={(props.cookie || {}).language || props.language} name="language" aria-label="Default select example">
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

                          {dataTypes.map(dtype => {
                              let isSelected = props.dataType.value === dtype.value;
                                if ((props.cookie || {}).excludeDataType) {
                                    let exlude = props.cookie.excludeDataType.find(type => type.value === dtype.value);
                                    if(exlude) {
                                        isSelected = false;
                                    } else {
                                        isSelected = true;
                                    }
                                }

                              return  (<Form.Check 
                              key={dtype.value}
                              id={dtype.value}
                              type="Checkbox"
                              name="dataType"
                              defaultChecked={isSelected}
                              disabled={true}
                              label={dtype.label}
                              defaultValue={dtype.value}
                          />)           
                          }

                          )}
                      </Form.Group>
                  </Col>
                  <Col>
                      <Form.Group controlId="unit">
                          <Form.Label>Choose unit</Form.Label>
                          {['standart', 'metric', 'imperial'].map(unit => {
                              let isChecked = props.unit === unit;
                                if(props.cookie || {}.unit) {
                                    isChecked = props.cookie.unit === unit;
                                }
                              return (                        
                          <Form.Check
                              key={unit}
                              id={unit}
                              name="unit"
                              type='radio'
                              defaultChecked={isChecked}
                              label={unit}
                              value={unit}
                          />)
                            }
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
    dataType: dataTypes.find(type => type.label === 'Daily'),
    unit: "metric",
}