import React from 'react';
import { About } from './About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <BrowserRouter>
        <div className="links">
            <nav>
                <Link to="/">About</Link>
            <br />
            </nav>
            </div>
        <div className ="routes">
            <Routes>
                <Route path="/" element={<About />} />
            </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
};

export default Navbar;