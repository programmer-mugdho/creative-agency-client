import React from 'react';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <a className="navbar-brand" href="#"><img src={logo} style={{ width: '150px' }} alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-3 active">
                        <a style={{ borderBottom:'4px solid #7AB259'}} className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="#">Our Team</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-brand px-5" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;