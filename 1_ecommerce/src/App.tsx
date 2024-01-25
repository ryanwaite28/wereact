import './App.css';
import './header.css'
import Header from "./header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';



function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>

        
      </Router>
    </div>
  );
}

export default App;