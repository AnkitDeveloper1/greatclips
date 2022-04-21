import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

    render() {
        
        const { userName } = this.props;
        
        return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" style={{"--bs-bg-opacity": "0.5"}}>
                <div className="container-fluid" style={{padding:"0"}}>
                    <Link to="/" className="navbar-brand">
                        <img src="/logo.png" className="logo" />
                    </Link>
                    <div className="float-right">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {userName?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">{userName}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/logout" className="nav-link">Logout</Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link" href="/">Sign Up</Link>
                                    </li>
                                    <li className="nav-item" style={{borderLeft:"1px solid #c1c1c1"}}></li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">Sign In</Link>
                                    </li>
                                </>
                            }
                            <li className="nav-item">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 quick-menu">
                                    <li className="nav-item">
                                        <a href="" className="nav-link"><i className="fa fa-star-o"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className="nav-link"><i className="fa fa-map-marker"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className="nav-link"><i className="fa-light fa-align-justify"></i></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
        );
    }
}

export default Header
