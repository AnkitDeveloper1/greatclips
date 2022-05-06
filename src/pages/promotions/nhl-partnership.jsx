import React from "react";
import { Link } from "react-router-dom";

function NHLPartnership() {

    return (
        <>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white promotions-tabs">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="">Paul Mitchell Sale</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Coupons</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Senior Discounts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">NHL Partnership</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Monster Jam</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <h1 className="text-center">National Hockey League</h1>

            <p>Love #hockeyhair? We got you.  Celebrate great flow all season long at www.nhl.com/hockeyhair.</p>
            
            <p>Play trivia challenges, watch videos, find memes and more, all in one great place.  Plus, take quiz to find out what your hockey hair style is and be entered to win NHL® tickets, merch, free haircuts for a year from Great Clips or even an NHL® suite night for you and your friends!</p>

            <p><i>NHL and the NHL Shield are registered trademarks of the National Hockey League. ©NHL 2022. All Rights Reserved.</i></p>
        </>
    );
}
export default NHLPartnership