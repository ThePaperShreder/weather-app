import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap'
import HeaderComponent from './Header/HeaderComponent';
import dataTypes from './Header/type.json';
// import MapComponent from './Body/MapComponent';
import { useCookies } from 'react-cookie';
import CurrentComponent from './Body/CurrentComponent';
import ForecastComponent from './Body/ForecastComponent'
import { Routes, Route } from 'react-router-dom'

function App() { 

  const [ form, setForm ] = useState(null); 
  const [cookies, setCookie, removeCookie] = useCookies(['weather']);
  console.log(cookies.weather);
  
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
    };
    setForm(updateData);
    setCookie('weather', updateData);
}

//ostavili header component statichnim pri izmenenii ssilki 
  return (
    <Container>
      <Row>
        <Col>
          <HeaderComponent handleOnSubmitForm={handleOnSubmit} 
          setForm={setForm} 
          form={form} 
          setCookie={setCookie}
          cookie={cookies.weather}/>
        </Col>
      </Row>
      <Row>
        <Col>
        {/* v nutri komponeneta routes mi propisivaem nashi ssilki. Kazhdaja ssilka eto route component,
         kotorii zapuskaetsa pri zahode opredeljonnoi v path.
         v element propisivaetsa tot component kotorii dolzhen obrabotatsa.
         chtobi peredat ljuboi parametr v ljuboi component v Route path pishitsa : i nzavanie peremennoi
         :city = Tallinn
         */}
          <Routes>
            <Route path="/" element={<CurrentComponent form={form} cookie={cookies.weather} />}/>
            <Route path="/Current/:city" element={<CurrentComponent form={form} cookie={cookies.weather} />}/>
            <Route path="/forecast" element={<ForecastComponent form={form} cookie={cookies.weather} />}/>
            {/* <MapComponent form={form} cookie={cookies.weather} /> */}
          </Routes>
        </Col>
      </Row>
    </Container>
    
  );
}



export default App;
