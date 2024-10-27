// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Callback from './page/Callback';
import Dashboard from './page/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Keycloak SSO with Laravel and React</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
