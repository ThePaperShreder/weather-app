import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap'
import HeaderComponent from './Header/HeaderComponent';
import dataTypes from './Header/type.json';
import MapComponent from './Body/MapComponent';
import { useCookies } from 'react-cookie';


function App() {

  const [ form, setForm ] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['weather']);

  function handleOnSubmit (event) {
    event.preventDefault();
    const city = event.target.city.value;
    const unit = event.target.unit.value;
    let selectedTypes = [];
    for (const dtype of event.target.dataType) {

      if(dtype.checked === true) {
        selectedTypes.push(dtype.value);
      }
    }

    let excludeDataType = dataTypes.filter(dtype => selectedTypes.includes(dtype.value) === false);

    const language = event.target.language.value;
    const updateData = {
        city,
        unit,
        language,
        excludeDataType,
    }
    setForm(updateData);
    setCookie('weather', updateData);
}



  return (
    <Container>
    <Row>
    <Col>
      <HeaderComponent handleOnSubmitForm={handleOnSubmit} setForm={setForm} form={form}/>
    </Col>
  </Row>
  <Row>
    <Col>
      <MapComponent form={form} cookie={cookies.weather} />
    </Col>
  </Row>
</Container>
    
  );
}



export default App;
