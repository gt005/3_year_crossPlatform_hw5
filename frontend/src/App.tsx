import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/mainPage/MainPage';
import LoginPage from './components/AuthorizationSystem/LoginPage';
import RegistrationPage from './components/AuthorizationSystem/RegistrationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
