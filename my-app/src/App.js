import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Trainers from './Trainers';
import PricesPage from './PricesPage';
import Categ from './Categ';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './CallPage';
import Me from './me';
import './Style.css';
import Napravlenie1 from './napravlenie1';

function App() {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serverPhoneNumber, setServerPhoneNumber] = useState('');

  useEffect(() => {
    const fetchPhoneNumber = async () => {
      try {
        const response = await fetch('/api/phone-number');
        const data = await response.json();
        setServerPhoneNumber(data.phone_number);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhoneNumber();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phoneNumber }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div className="app-container">
      <Navbar bg="light" expand="lg" className="custom-navbar">
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/trainers" className="nav-link" style={{fontFamily: "Garamond",fontSize: "20px"}}>Тренеры</Nav.Link>
            <Nav.Link href="/prices" className="nav-link"style={{fontFamily: "Garamond",fontSize: "20px"}}>Цены</Nav.Link>
            <Nav.Link href="/categ" className="nav-link"style={{fontFamily: "Garamond",fontSize: "20px"}}>Направления</Nav.Link>
            <Nav.Link href="/home" className="nav-link"style={{fontFamily: "Garamond",fontSize: "20px"}}>Заказать звонок</Nav.Link>
            <Nav.Link href="/me" className="nav-link"style={{fontFamily: "Garamond",fontSize: "20px"}}>О нас</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        
      <Navbar className="footer" bg="dark" variant="dark" fixed="bottom">
      <Navbar.Text style={{ display: 'block' }}>Адрес студии: Несуществующий переулок, дом 3 строение 5, офис 309</Navbar.Text>
      <Navbar.Text style={{ display: 'block' }}>Сайт разработан студентами группы 6314 для задания по предмету практикум ЭВМ</Navbar.Text>
</Navbar>

      
        <Routes>
          {/* ... */}

          <Route path="/trainers" element={<Trainers />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/categ" element={<Categ />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/me" element={<Me />} />
          <Route path="/napravlenie1" element={<Napravlenie1 />} />
          {/* ... */}
        </Routes>

        {/* ... */}
      </div>
    </Router>
  );
}

export default App;