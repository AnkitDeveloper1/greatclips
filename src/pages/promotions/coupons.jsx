import React from "react";

function Coupons() {

    return (
        <>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white promotions-tabs">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Paul Mitchell Sale</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Coupons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Senior Discounts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">NHL Partnership</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Monster Jam</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <h1 className="text-center">Great Clips Coupons</h1>
            <img className="img-fluid" src="/GreatClips Coupons.jpg" />
            <p>Looking for more information on Great Clips coupons? You’ve come to the right place! There are a variety of ways to obtain a coupon for a Great Clips haircut including email, social media and print/mailers.</p>

            <p>We urge customers to be cautious of coupons found online as some are not authorized by Great Clips or are only applicable to specific salons.</p>

            <p>Great Clips salons are independently owned and operated franchised businesses. Therefore, most sales and coupons are locally created and are valid on an individual market, city, or salon level. Great Clips coupons will state which market, city, or salon level they will be accepted at as well as the coupon expiration date. We recommend checking with your local salon to see what promotions are currently available.</p>

            <p>The FAQ section below can help you find the answers you need, get the haircut you want, and get on with your day! If your question is not listed below, you can call your local Great Clips salon.</p>

            <div className="row" style={{backgroundColor: "#f2f2f2", padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/Coupons560x420.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Sign Up Now for $2 Off</h1>
                    <p>Sign up to receive the latest deals, news and hair trend tips. As a thank you, we will email you a coupon for $2 off your next haircut.</p>
                    <a href="" className="btn btn-primary">SIGN ME UP</a>
                    <p>*One time offer only. Eligible for newly opted-in email addresses only. Not valid with other offers.</p>
                </div>
                <div className="col-md-2"></div>
            </div>

            <h2>Frequently Asked Questions</h2>

            <p><b>Where can I get a Great Clips haircut coupon?</b></p>
            <p>Customers can receive Great Clips coupons through multiple ways including print postcards, Facebook and Instagram ads, emails, app messages, and more. To stay up to date with Great Clips offers and promotions, you can sign up for emails here, download the app and create a profile, and follow your local Great Clips salon on Facebook.<br />We urge you to be cautious with any coupons you might see online as some are not authorized by Great Clips or are only applicable to specific salons. If you’re not sure if a coupon is valid, we recommend checking with your local salon.</p>

            <p><b>How do I know if my digital coupon is valid? How can I find out when a digital coupon expires?</b></p>
            <p>Please check with your local salon directly regarding what coupons and discounts they are currently offering and accepting. Our digital coupons have a unique, single-use coupon code that is 5 or 6 characters long. These coupons have a unique web address where you can see which market, city, or salon the coupon is valid in and when it expires. If you have questions, please contact your local salon to verify if they accept the coupon.</p>

            <p><b>How do I know if my paper coupon is valid?</b></p>
            <p>The coupon should have an expiration date and an explanation of where the coupon is valid. If you can’t determine this information based on the coupon you have, you can call your local salon to verify if they accept the coupon.</p>

            <p><b>Are coupons found on Facebook or Instagram valid?</b></p>
            <p>If you’ve seen a coupon in a Facebook or Instagram ad, you can click on the “Redeem Now” button to see the unique 5 or 6 character, single-use coupon code. If you see a coupon online that does not have a 5 or 6 character single-use coupon code, it is likely not a valid Great Clips coupon. If you do see a 5 or 6 character single-use code, please scroll down to the Terms & Conditions section of the coupon to confirm the coupon is valid in your market, city, or salon. If your market, city, or salon is not listed in the Terms & Conditions, the coupon is likely not valid in your salon. If you have questions, please contact your local salon to verify if they accept the coupon.</p>

            <p><b>What should I do if my coupon doesn’t have a barcode?</b></p>
            <p>If you see a coupon online that does not have a unique, single-use coupon code that is 5 or 6 digits long, it is likely not a valid Great Clips coupon. You can call your local salon to verify if they accept the coupon.</p>
            
            <p><b>Why was my coupon not accepted at my local Great Clips salon?</b></p>
            <p>Each location is independently owned and operated by a franchisee who decides which coupons they offer and accept. If you’d like a follow-up, please email CustomerService@greatclips.com with the salon location and details. We will forward it onto the franchisee so they can get in touch with you regarding your concerns or you can contact your local salon directly.</p>

            <p><b>Do you offer student discounts?</b></p>
            <p>Franchisees independently decide if they offer discounts for students. You can call your local salon to verify if they offer student discounts.</p>

            <p><b>Do you offer senior discounts?</b></p>
            <p>Franchisees independently decide if they offer discounts for seniors. You can call your local salon to verify if they offer senior discounts.</p>
        </>
    );
}
export default Coupons