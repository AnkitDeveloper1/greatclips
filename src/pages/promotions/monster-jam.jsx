import React from "react";
import { Link } from "react-router-dom";

function MonsterJam() {

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
                                <Link className="nav-link" to="">Coupons</Link>
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
            <h1 className="text-center">2022 Monster Jam Great Clips Mohawk Warrior®</h1>

            <img className="img-fluid" src="/1450x400monsterjam.jpg" />

            <p>Great Clips is proud to be a sponsor of the Monster Jam Great Clips Mohawk Warrior® for the 2022 season. For up-to-date schedules and lineups and to purchase tickets, visit monsterjam.com</p>

            <h3>Great Clips Mohawk Warrior® Snapchat Lens</h3>
            <p>Together with Monster Jam®, we’re making you the driver of your own Monster Jam truck.</p>
            <p>Use the front-facing “selfie” camera to see yourself decked out in your Monster Jam driving gear, or flip the camera to rear-facing and find yourself behind the wheel and cruising through your home, the park, or the grocery store.</p>
            <p>If you have the Snapchat app, great! Click here to open Snapchat and activate the Lens.</p>
            <p>Or, to use the Snapcode:</p>

            <img className="img-fluid" src="/monsterjamsnapcode.png" />

            <ul>
                <li>Take a screenshot of this screen, including the Snapcode above</li>
                <li>In Snapchat, tap the Profile icon in the top left to go to your Profile screen</li>
                <li>Tap the Settings icon in the top right</li>
                <li>Tap "Snapcodes"</li>
                <li>Tap "Scan from Camera Roll"</li>
                <li>Select the screenshot of the screen</li>
            </ul>
            
            <p>This Snapcode will also be featured at Great Clips activations at select Monster Jam events across the US and Canada.</p>
        </>
    );
}
export default MonsterJam