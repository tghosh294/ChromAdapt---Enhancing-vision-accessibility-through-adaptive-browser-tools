// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Types from './pages/Types';
import Test from './pages/Test';
import Dashboard from './pages/Dashboard';
import Extension from './pages/Extension';
import Community from './pages/Community';
import Developer from './pages/Developer';
import Help from './pages/Help';
import Feedback from './pages/Feedback';
import './styles/App.css'; // Make sure this line exists

function App() {
  const [user, setUser] = useState(null);
  const [cvdType, setCvdType] = useState(null);
  const [severity, setSeverity] = useState(null);

  return (
    <Router>
      <div className="App">
        <Header user={user} setUser={setUser} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/types" element={<Types />} />
            <Route path="/test" element={
              <Test 
                setUser={setUser} 
                setCvdType={setCvdType} 
                setSeverity={setSeverity} 
              />
            } />
            <Route path="/dashboard" element={
              <Dashboard 
                user={user} 
                cvdType={cvdType} 
                severity={severity} 
                setCvdType={setCvdType}
                setSeverity={setSeverity}
              />
            } />
            <Route path="/extension" element={<Extension />} />
            <Route path="/community" element={<Community />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/help" element={<Help />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;