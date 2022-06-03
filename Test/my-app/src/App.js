import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComponent from './Header/NavComponent';
import { Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <Container>
  <Row>
    <Col>
      <NavComponent/>
    </Col>
  </Row>
</Container>
    
  );
}

export default App;
