import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Cat'
import backgroundImg from './images/background.jpg'

import { Row, Col, Container } from 'react-bootstrap';
import { Cat } from './Cat';
import { Link, Outlet } from 'react-router-dom'
export function Home() {
  return (
    <>
      <div className="App">
        <div className="App-header" style={{ backgroundImage: `url(${backgroundImg})` }}>
          <Container fluid className="align-items center">
            <Row className="align-items-center">
              <Col>
                <h1 className="homeTitle">Hannah's Commissions</h1>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col>
                <ul className="menu">
                  <li className="grays ul-space"><Link to="/menu">Menu</Link></li>
                  <li className="purples ul-space">About me</li>
                  <li className="mint ul-space">F.A.Q</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <Cat />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Outlet />
    </>
  );
}