import HomeScreen from './Screens/HomeScreen'
import { Container,Row,Col } from 'react-bootstrap'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <Router>
        <main className="py-3">
          <Container fluid>
            <Row>
              <Col xs={2} id="side-wrapper">
                <Sidebar/>
              </Col>
              <Col xs={10} id="page-content-wrapper">
                <Route path='/' component={HomeScreen} exact/>
              </Col>
            </Row>
          </Container>
        </main>
    </Router>
  );
}

export default App;
