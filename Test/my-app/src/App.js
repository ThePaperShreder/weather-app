import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap'
import HeaderComponent from './Header/HeaderComponent';
import dataTypes from './Header/type.json';
import MapComponent from './Body/MapComponent';
import { useCookies } from 'react-cookie';


function App() { //Main Component - renders <div id=root>

  const [ form, setForm ] = useState(null); //Hook that answears for state of component, all Hooks start with the word *use*
  //useState returns array with two elements 1.tekushee sostojanie  2. funktsija dlya ego obnovlenija
  //znachenie nachalogo sostojanija
  const [cookies, setCookie, removeCookie] = useCookies(['weather']);
  //huk s dopolnitelnogo paketa npm react-cookie
  //useCookie massive s nazvaniem budushih cookie
  //useCookie vozrashaet massive s 3 elementami 1.objekt: cookie={weather:null}
// useCookie ne obnovljaet (render) komponent
  console.log(cookies.weather);
  // dlya vivoda v console + developertools


  //Obrabotshik submit sobitija
  function handleOnSubmit (event) {
    //zapreshaem emu deistvovat po umolchaniju
    event.preventDefault();
    //poluchaem informatsiju ot pozovatelja
    // to chto on vpisal v input
    //event.target.vity.value = {sobitie}.{danniiDOM}.{imja input teg}.{ego znachenie}
    const city = event.target.city.value;
    const unit = event.target.unit.value;
    let selectedTypes = [];
    for (const dtype of event.target.dataType) {

      if(dtype.checked === true) {
        selectedTypes.push(dtype.value);
      }
    }
    //Filter kak forEach, Map, For prohodjat po vsemu massivu no sotavljaet tolko te znachenija kotorii mi nam nuzhni
    //i on vernjotv massive uzhe s nuhnimi nam dannimi

    //.includes prosto smotrit na massive i ishet estli v njom znachenie poluchnoe s argumentom
    //vozrashaet true ili false
    let excludeDataType = dataTypes.filter(dtype => selectedTypes.includes(dtype.value) === false);
    const language = event.target.language.value;
    const updateData = {
        city,
        unit,
        language,
        excludeDataType,
    };
    //setForm - funktsija kotoraja menjaet state componeneta iposle proishodit rerender.
    setForm(updateData);
    setCookie('weather', updateData);
}


//component vsegda dolzhen vozrashat react component: JSX
//JSX - JS + html, pomogaet sovmestit ih vmeste
//JSX trebuet Root  elelment, html ili react element 
//dlya ukazanija JS ispolzuetsa {}
//properties peredautsa v komponent html atibuti 

  return (
    <Container>
    <Row>
    <Col>
      <HeaderComponent handleOnSubmitForm={handleOnSubmit} 
      setForm={setForm} 
      form={form} 
      cookie={cookies.weather}/>
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
