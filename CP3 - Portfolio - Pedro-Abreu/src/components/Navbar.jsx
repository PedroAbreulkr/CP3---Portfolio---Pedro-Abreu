import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="dots">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div style={{fontWeight:700}}>Pedro Abreu</div>
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a className="button primary" href="mailto:pedroaraujolkr@gmail.com">Hire Me</a></li>
      </ul>
    </nav>
  );
}
