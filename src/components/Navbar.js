import React from 'react';
import {Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <Link to="/">About</Link> ||
            <Link to="/types">Types of Scoliosis</Link> ||
            <Link to="/workouts">Workouts for your Curve</Link> ||
            <Link to="/bibliography">Site Credits</Link>
        </nav>
    </div>
  );
};

export default Navbar;