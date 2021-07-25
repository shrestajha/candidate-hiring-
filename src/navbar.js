import React from 'react';
import { Link } from "react-router-dom";
class NavBar extends React.Component 
{
    render () { 
        return (
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#fff'}}>
              <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="/Logo.PNG" alt="" width="50" height="50" className="d-inline-block align-text-top" />
              </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <Link to="/" className="nav-link" style={{fontSize: '20px'}}>Resume Simulation!</Link>
                    </li>
                    <li className="nav-item" style={{ marginLeft: '150px '}}>
                      <Link to="/aboutus" className="nav-link">About Us!</Link>
                    </li>
                    <li className="nav-item" style={{ marginLeft: '250px '}}>
                      <Link to="/selecttest" className="nav-link">Simulation</Link>
                    </li>
                    <li className="nav-item" style={{ marginLeft: '250px '}}>
                      <Link to="/reports" className="nav-link">Reports</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        )

    }
}
export default NavBar;