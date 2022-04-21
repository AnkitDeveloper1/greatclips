import React from "react";

function PaulMitchellSale() {

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
            <h1 className="text-center">Great Products. Low Prices.</h1>
            <img className="img-fluid" src="/PaulMitchellBanner.jpg" />
            <p>Freshen up your haircare routine for spring with Paul Mitchell products! Through the end of April, all Paul Mitchell hair products are on sale at participating Great Clips salons for $12.99 or less in the US or $16.99 in Canada.<br />Not sure what products to step into spring with? Chat with the stylists at your local Great Clips salon to get their recommendations.</p>

            <div className="text-center">
                <a className="btn btn-primary" href="">FIND A SALON</a>
                <p><i>Excludes liters, Tea Tree Scalp Care products, Spray Wax 7.5oz, and Super Skinny Serum.</i></p>
            </div>
            
        </>
    );
}
export default PaulMitchellSale