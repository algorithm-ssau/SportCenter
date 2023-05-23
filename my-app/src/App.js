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
            <Nav.Link as={Link} to="/trainers" className="nav-link">Тренера</Nav.Link>
            <Nav.Link href="/prices" className="nav-link">Цены</Nav.Link>
            <Nav.Link href="/categ" className="nav-link">Категории</Nav.Link>
            <Nav.Link href="/home" className="nav-link">Заказать звонок</Nav.Link>
            <Nav.Link href="/me" className="nav-link">О нас</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        

        <Routes>
          {/* ... */}
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/categ" element={<Categ />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/me" element={<Me />} />
          {/* ... */}
        </Routes>

        {/* ... */}
      </div>
    </Router>
  );
}

export default App;