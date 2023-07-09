import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Col, Container} from 'react-bootstrap'
import backgroundImg from './images/background.jpg'
import {Routes, Route, Link} from 'react-router-dom'
import { Home } from "./Home"
import {Menu} from "./Menu"
import { FormPage } from './FormPage';
import { AboutMe } from './AboutMe';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/> 
      <Route path="/request" element={<FormPage/>}/>
      <Route path="/aboutme" element={<AboutMe/>}/>
    </Routes>
  );
}

export default App;
