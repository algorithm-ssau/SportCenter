import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Napravlenie1 from './napravlenie1';
import './App';

function Categ() {
  return (
      <form className="custom-form">
        <h1>Направления</h1>
        <Link to="/napravlenie1" className="btn">Перейти на направление 1</Link>
        
      </form>
  );
}

export default Categ;