import React from "react";
import { Link } from "react-router-dom";

function SeniorDiscounts() {

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
            <h1 className="text-center">Senior Discounts on Haircuts</h1>
            <img className="img-fluid" src="/1450x400 Senior Discount.jpg" />
            
            <p>Are you interested in haircuts for Seniors? Are you interested in saving money on your next haircut with a Senior discount? Well, we have great news!</p>


            <h3>Great Clips Has Senior Discounts</h3>
            <p>At Great Clips salons, Seniors save with at least $2 off our already low regular haircut prices. Seniors ages 65 and older qualify for this discount, and there’s no coupon needed. Just mention that you qualify for the Senior discount before your hair stylist rings you up, and the Senior discount will be applied to your service.<br /><i>*At participating salons. Senior discounts may vary by salon.</i></p>

            <h3>So, what is Great Clips’ Senior discount?</h3>
            <ul>
                <li>Seniors get $2 off already low regular haircut prices.</li>
                <li>Seniors ages 65 and older qualify for this discount.</li>
                <li>There is no specific Senior discount day; the Senior discount is available any day at participating salons.</li>
                <li>Additional services like styling or hair products are not eligible for the discount.</li>
            </ul>

            <Link className="btn btn-primary" to="">FIND A SALON</Link>

            <h3>Other Ways to Have a Great Visit</h3>
            <p><b>Avoid waiting in line by using our Online Check-In.</b> If you check in online for your haircut instead of at the salon’s front desk, you can get on the wait list from your home, the store, the coffee shop, or wherever you like to spend your time.</p>
            
            <p>As part of checking in online you can even sign up to get a ReadyNext text alert that sends you an SMS text message when your wait time gets down to 15 minutes. Then arrive at the salon as your estimated wait time approaches zero to keep the time you spend in the salon to a minimum. Just let the stylist or receptionist know you’ve arrived when you walk into the salon, and you’ll be ready to go!</p>
            
            <p><b>Great haircuts every time with Clip Notes.</b> When you visit a Great Clips salon, your stylist will record technical notes about your haircut – such as style, shape or type of haircut, clipper guards or desired length, sideburns, texturizing, and more. These notes, called Clip Notes, ensure the next time you visit a Great Clips salon the stylist that cuts your hair will know exactly how to deliver the same quality haircut you want.</p>


            <Link className="btn btn-primary" to="">CHECK IN ONLINE</Link>
        </>
    );
}
export default SeniorDiscounts