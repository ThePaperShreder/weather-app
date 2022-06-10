import React, {useRef, useEffect} from "react";
import { Container, Form, Col, Row } from 'react-bootstrap';
import cities from './Cities.json';
import dataTypes from './type.json';

export default function FormComponent(props) {

  const formElement = useRef(null);
//useRef eto hook, kak sposob poluchit dostub v DOM (virtualDOM eto v VSC)
//chtobi  naznachit s kakoi element mi budem ssilatsa, ispolzuet atribut v ref={} v html
//mi poluchaem vsjo derevo DOM v objekte current(formElement.current)

//useEffect ispolzuetsa dlya raboti s DOM
//useEffect zapuskaetsa posle togo kak render componenta zakonchilsa
//useEffect ne lijaet na sam componnet, ne zauskaet rerender ili render
  useEffect(() => {
    if(props.form === null) {
      props.setForm({
        city: props.selectedCity,
        unit: props.unit,
        language: props.language,
      });
    }}
  );
  
 //onInput zapuskaetsa pri videnii danni ot polzovatelja v input html tag.
 //onInput tolko sushestvuet v formah i input tag

  function OnInput () {
//funktsija kotoraja berjot ssilku na element (form) DOM, i naznachaet emu novoe sobitie 
// eto novoe sobitie zapuskaet submit funktsiju Formi
    formElement.current.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  }
//onInput i onSubmit eventi kotorii zaouskaut brauser
//sobitija html - sobitija kotorie proishodjat s elementami html
//sobtija ishodjat iz brausera i is polzovatelja
// u sobitija dolzhn bit obrabotchik - finktsija JS
//sobitija peredaet obrabotchiku 1.DOM strukturu dannogo elementa na kotorom visit sobitie
//event.target


//Form ispolzueetsa dlya polcheija dannih ot pozovatelja i poslat ih na server dlya obrabotki
//Form dlya etogo isolzuet dva glavnih protokola Post i Get
//Post dlya otpravki dannih
//get dlya poluchenija
// po umolchaniju on otpravlaet dannie cherez method post
//esli mi hotim izmenit, mi propisivaem atribut method="Get"
//v forme ispolzuutsa enput tegi dlya sbora dannih

//key - v Reacte dolzhen bit unikalnim, dlya otslezhivanija ljubim izmenenii vkomponente
//tem samim renderit to chto re obhodimo
  return (
        <Container>
            <Form method="GET" ref={formElement} onInput={OnInput} onSubmit={props.handleOnSubmitForm}>
              <Row>
                  <Col>
                      <Form.Group className="mb-3" controlId="city">
                          <Form.Label>Choose city</Form.Label>
                          <Form.Select defaultValue={(props.cookie || {}).city || props.selectedCity} name="city" aria-label="Default select example">
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