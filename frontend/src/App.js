import HomeScreen from './Screens/HomeScreen'
import RegisterScreen from './Screens/RegisterScreen'
import LoginScreen from './Screens/LoginScreen'
import ProfileScreen from './Screens/ProfileScreen'
import ProfileViewScreen from './Screens/ProfileViewScreen'
import SubscribeScreen from './Screens/SubscribeScreen'
import PackageEditScreen from './Screens/PackageEditScreen'
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
                <Route path='/register' component={RegisterScreen}/>
                <Route path='/login' component={LoginScreen}/>
                <Route path='/user/update' component={ProfileScreen}/>
                <Route path='/profile' component={ProfileViewScreen}/>
                <Route path='/package/:id/edit' component={PackageEditScreen}/>
                <Route path='/subscription' component={SubscribeScreen}/>
              </Col>
            </Row>
          </Container>
        </main>
    </Router>
  );
}

export default App;
