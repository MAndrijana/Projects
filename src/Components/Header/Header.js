import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="Header">
            <Link to="/">
                <div className="bannerImage">
                <div className="darken">
                <h1 className="bannerHeader">music-db</h1>
                </div>
                </div>
                <div className="pb-3 coloredDiv"></div>
            </Link>
        </div>
    );
};

export default Header;