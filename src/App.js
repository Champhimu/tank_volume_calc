import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Tankvolume from './components/tankvolume';

function App() {
  return (
    <div className="App">
    <Container>
      <Row>
        <Col xs={12}>
          <Header/>
          <Tankvolume />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
