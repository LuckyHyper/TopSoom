import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App1.css';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>} />
        </Routes>
    </Router>
  );
}

export default App;