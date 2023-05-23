
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Style.css';

function HomePage() {
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
    <form onSubmit={handleSubmit} className="custom-form">
      <h1  >Заказать звонок</h1>
  <Form.Group controlId="formName">
    <Form.Label >Имя</Form.Label>
    <FormControl style={{ display: 'block' }}
      type="text"
      placeholder="Введите ваше имя"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formPhoneNumber">
    <Form.Label>Номер телефона</Form.Label>
    <FormControl style={{ display: 'block' }}
      type="tel"
      pattern="8[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
      placeholder="Введите номер телефона"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
    />
  </Form.Group>

  <Button variant="primary" type="submit">
    Отправить
  </Button>
</form>
  );
}

export default HomePage;