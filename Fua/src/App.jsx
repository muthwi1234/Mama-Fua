// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RegistrationForm from './Components/RegistrationForm';
import ServiceListings from './Components/ServiceListings';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/services" element={<ServiceListings />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
