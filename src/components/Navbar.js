import React from 'react';
import { About } from './About';
import TypesContainer from '../containers/TypesContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Bibliography } from './Bibliography';

const Navbar = () => {
  return (
    <div className="navbar">
        <BrowserRouter>
        <div className="links">
            <nav>
                <Link to="/">About</Link> ||
                <Link to="/types">Types of Scoliosis</Link> ||
                <Link to="/bibliography">Site Credits</Link> ||
            <br />
            </nav>
        </div>

        <div className ="routes">
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/types" element={<TypesContainer />} />
                <Route path="/bibliography" element={<Bibliography />} />
            </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
};

export default Navbar;