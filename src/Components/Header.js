import React from 'react';
import logo from '../logo.png';
const Header = () => {
    return (
        <div className="Header">
             <nav className="navbar navbar-expand-lg border-bottom border-top-0 border-left-0 border-right-0">
            <a className="navbar-brand" href="/"><img src={logo} alt="logo" width="100" /></a>
    <ul className="navbar-nav m-auto text-uppercase">
                <li className="nav-item">
                    <a className="nav-link" href="/">home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">bikes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">gear</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">parts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">tires</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">service-info</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">catalogues</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">contact</a>
                </li>
            </ul>
            <a href="/"><i className="fas fa-search icon1"></i></a>
            <a href="/"><i className="fas fa-shopping-bag icon2"></i></a>
            </nav>
             
      <div className="row">
          <div className="col">
              <div className="border-bottom border-top-0 border-left-0 border-right-0 py-3">
                  <p className="h1 mb-0">Bikes</p>
              </div>
         </div>
     </div>
     </div>
    );
};

export default Header;