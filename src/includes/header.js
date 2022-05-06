import React, { useState } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Drawer } from 'rsuite';

const Header = (props) => {
    const [open, setOpen] = useState(false);
    const { userName } = props;
    
    return (
    <>
        <Drawer open={open} onClose={() => setOpen(false)}>
            <Drawer.Body>
                <>
                    <ul className="list-unstyled display-6 drawer_menu_one">
                        <li><Link to="/">Salons & Online Check-In</Link></li>
                        <li><Link to="/haircare-services">Haircare Services</Link></li>
                        <li><Link to="/promotions">Promotions</Link></li>
                        <li><Link to="/">Career Opportunities</Link></li>
                    </ul>
                    <ul className="row list-unstyled drawer_menu_two">
                        <li className="col-md-6"><Link to="/"><p className="lead">Gift Card Balance</p></Link></li>
                        <li className="col-md-6"><Link to="/"><p className="lead">Haircare Products</p></Link></li>
                        <li className="col-md-6"><Link to="/"><p className="lead">Own a Salon Franchise</p></Link></li>
                        <li className="col-md-6"><Link to="/"><p className="lead">Great Clips App</p></Link></li>
                    </ul>
                    <ul className="row list-unstyled drawer_menu_three">
                        <li className="col-md-6"><Link to="/">Blog</Link></li>
                        <li className="col-md-6"><Link to="/">My Profile</Link></li>
                        <li className="col-md-6"><Link to="/">Do Not Sell My Information</Link></li>
                        <li className="col-md-6"><Link to="/">Privacy Notice</Link></li>
                        <li className="col-md-6"><Link to="/">Contact Us</Link></li>
                        <li className="col-md-6"><Link to="/">Terms of Use</Link></li>
                        <li className="col-md-6"><Link to="/">Real Estate</Link></li>
                        <li className="col-md-6"><Link to="/">Accessibility Notice</Link></li>
                        <li className="col-md-6"><Link to="/">About Us</Link></li>
                    </ul>
                    <ul className="text-center list-inline">
                        <li className="list-inline-item p-3"><Link to="/"><i className="fa fa-twitter fa-2x"></i></Link></li>
                        <li className="list-inline-item p-3"><Link to="/"><i className="fa fa-facebook fa-2x"></i></Link></li>
                        <li className="list-inline-item p-3"><Link to="/"><i className="fa fa-instagram fa-2x"></i></Link></li>
                        <li className="list-inline-item p-3"><Link to="/"><i className="fa fa-youtube fa-2x"></i></Link></li>
                        <li className="list-inline-item p-3"><Link to="/"><i className="fa fa-pinterest fa-2x"></i></Link></li>
                    </ul>
                    <p className="text-center">© 2022 Great Clips, Inc. All rights reserved.</p>
                </>
            </Drawer.Body>
        </Drawer>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" style={{"--bs-bg-opacity": "0.5"}}>
            <div className="container-fluid" style={{padding:"0"}}>
                <Link to="/" className="navbar-brand">
                    <img src="/logo.png" className="logo" />
                </Link>
                <div className="float-right">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 header_right_side">
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
                                <li className="nav-item" style={{ borderLeft: "1px solid rgb(193, 193, 193)", height: "25px", marginTop: "8px" }}></li>
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
                                    <Link to="" className="nav-link"><i className="fa fa-star-o"></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-link"><i className="fa fa-map-marker"></i></Link>
                                </li>
                                <li className="nav-item">
                                    <ButtonToolbar>
                                        <Link to="" onClick={() => setOpen(true)} className="nav-link"><i className="fa fa-align-justify"></i></Link>
                                    </ButtonToolbar>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
};

export default Header
