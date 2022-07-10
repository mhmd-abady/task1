import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" onClick={() => window.location.replace()} className="navbar-brand">Customerssss</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" onClick={() => window.location.replace()} className="nav-link">Customers List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/add" onClick={() => window.location.replace()} className="nav-link">Create Customers </Link>
          </li>
        </ul>
        </div>
      </nav>
        );
    }
}