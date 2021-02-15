import React, { Component } from 'react';
import Girls-Listen-Music_0 from '../images/raw/Girls-Listen-Music_0.jpg';
class Header extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="Header container">
                <div className="row">
                    <div className="col-md-10">
                        <img src={Girls-Listen-Music_0}></img>
                
                    </div>
                </div>
            </div>
        );
    }
};

export default Header;