import React from 'react';
import { About } from './About';
import { TypesContainer } from '../containers/TypesContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <BrowserRouter>
        <div className="links">
            <nav>
                <Link to="/">About</Link>
                <Link to="/types">Types of Scoliosis</Link>
            <br />
            </nav>
        </div>

        <div className ="routes">
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/types" element={<TypesContainer />} />
            </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
};

export default Navbar;