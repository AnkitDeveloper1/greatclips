import React from "react";

function Promotions() {

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
            <h1 className="text-center">Great Promotions</h1>
            <p>Check out the latest and greatest promotions and partners that we have going this month for our haircare services and products!  We are always adding more so check back often for updates!</p>

            <div className="row" style={{padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/2022PM Sale.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Great Products. Low Prices.</h1>
                    <p>All Paul Mitchell hair products are on sale for $12.99 or less in the US or $16.99 in Canada for March and April in participating Great Clips salons.</p>
                    <a href="" className="btn btn-primary">SEE DEAL</a>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{backgroundColor: "#f2f2f2", padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/560x420_GreatClips Coupons.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Coupons</h1>
                    <p>Find the answers to your Great Clips coupon-related questions here!</p>
                    <a href="" className="btn btn-primary">MORE INFO</a>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/560x420 Senior Discount.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Senior Discounts</h1>
                    <p>Great Clips salons have senior discounts on haircuts.</p>
                    <a href="" className="btn btn-primary">LEARN MORE</a>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{backgroundColor: "#f2f2f2", padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/GreatClipsNHL560x420.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Official Hair Salon of the NHL&#xae;</h1>
                    <p>Love #hockeyhair? We got you. Celebrate great flow all season long at www.nhl.com/hockeyhair. From epic flows to magnificent mullets, we’re proud to be the official hair salon of this legendhairy league.</p>
                    <a href="" className="btn btn-primary">SEE DETAILS</a>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/560x420monsterjam.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>The Great Clips Mohawk Warrior&#xae;</h1>
                    <p>Try out the the Great Clips Mohawk Warrior® Snapchat lens to put yourself behind the wheel!</p>
                    <a href="" className="btn btn-primary">TRY IT</a>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{backgroundColor: "#f2f2f2", padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/560x420vetad.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Honor Veterans</h1>
                    <p>Learn how you can honor a vet with a free haircut</p>
                    <a href="" className="btn btn-primary">SEE DETAILS</a>
                </div>
                <div className="col-md-2"></div>
            </div>
        </>
    );
}
export default Promotions