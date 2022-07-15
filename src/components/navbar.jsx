import React, {Component} from 'react';

//Stateless Funcctional components

const Navbar = ({totalCounters}) =>{
  return (
    <nav className = "navbar navbar-dark bg-dark">
      <a className="navbar-brand" href='#'>Navbar
        <span className = "badge bg-pill bg-secondary m-2">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default Navbar;
