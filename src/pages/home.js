import React, { useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import UsStatesServices from "../services/usstatesServices";
import SaloonServices from "../services/saloonServices";
import { Link, useNavigate } from 'react-router-dom';
import friendlyUrl from 'friendly-url';
import { Image } from "react-bootstrap";

function IndexPage(props) {
    const [usStatesList, setUsStatesList] = useState(0);
    const [getSaloonListing, setSaloonListing] = useState(0);
    const [searchSaloonStatus, setSearchSaloonStatus] = useState(false);
    
    const getUsStatesList = async () => {
        if(!usStatesList) {
            const us_states = await UsStatesServices.getUsStates();
            setUsStatesList(us_states.data);
        }
    }
    getUsStatesList()

    let navigate = useNavigate();
    let currentDay = new Date();
    currentDay = currentDay.getDay();
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        setSearchSaloonStatus(false)
        console.log(string, results)
    }
    
    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }
    
    const handleOnSelect = async (item) => {
        // the item selected
        const saloonDetailByLocation = await SaloonServices.getSaloonsByCityState(item.city, item.state_code);
        setSaloonListing(saloonDetailByLocation.data)
        setSearchSaloonStatus(true)
        //navigate('/saloon/'+item.city+'/'+item.state_code);
    }
    
    const handleOnFocus = () => {
        console.log('Focused')
    }
    
    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.city}, {item.state_name} </span>
            </>
        )
    }

    return (
        <>
            <div className="row">
                <Image width={1304} height={353} src="/home_banner_page.jpg" alt="Home Page" />
            </div>
            <div className="row p-4">
                <div className="col"></div>
                <div className="col-9">
                    <label>Search City, State or Postal Code</label>
                    <ReactSearchAutocomplete
                        items={usStatesList}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        formatResult={formatResult}
                        placeholder="Find a Salon"
                    />
                    {searchSaloonStatus?
                    <>
                        <ul className="nav nav-tabs" id="homePageTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="list-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="true">List</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="map-tab" data-bs-toggle="tab" data-bs-target="#map" type="button" role="tab" aria-controls="map" aria-selected="false">Map</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="homePageTabContent">
                            <div className="tab-pane fade show active" id="list" role="tabpanel" aria-labelledby="list-tab">
                                <ul className="list-unstyled saloon_listing">
                                    {getSaloonListing.length && getSaloonListing.map((saloon) => (
                                        <li>
                                            <h2><Link to={"/us/"+friendlyUrl(saloon.state)+"/"+friendlyUrl(saloon.city)+"/"+friendlyUrl(saloon.address)+"/"+saloon._id}>{saloon.name}</Link></h2>
                                            <p className="mb-0">{saloon.address}</p>
                                            <p className="mb-0"><b>OPEN TODAY: {saloon.open_hours[currentDay-1]}</b></p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="map" role="tabpanel" aria-labelledby="map-tab">...</div>
                        </div>
                    </>
                    :<div className="text-center">
                        <h3>Great Clips Online Check-In</h3>
                        <p>What is Online Check-in?</p>
                        <Image width={200} height={247} src="/teal-pin.png" onClick={props.actionMyLocation} />
                        <h3>Check In for map and<br />estimated wait times</h3>
                    </div>
                    }
                </div>
                <div className="col"></div>
                <p>For those whose accessibility needs require more assistive channels, Great Clips can facilitate the use of Online Check-In through appropriate communication methods consistent with applicable law guidelines. Please call us toll-free at  1-800-473-2825 or email us at customerservice@greatclips.com. See https://www.greatclips.com/accessibility-notice for more detail.</p>
            </div>

            <div className="row" style={{backgroundColor: "#f2f2f2", padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <Image width={410} height={307} className="img-fluid" src="/Homepage Recruiting Image_560x420.png" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Great Clips salons are hiring!</h1>
                    <p>Are you looking for a fun and rewarding career with the world’s largest salon brand? With over 4,400 locations, an award-winning educational system, and an immediate customer base…GREAT career opportunities await. Join a salon team and Be One of the Greats!</p>
                    <Link to="/" className="btn btn-primary">SEARCH JOB OPENINGS</Link>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <Image width={410} height={307} className="img-fluid" src="/Coupons560x420.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Sign Up Now For $2 Off</h1>
                    <p>Sign up to receive the latest deals, news and hair trend tips. As a thank you, we will email you a coupon for $2 off your next haircut.</p>
                    <Link to="/" className="btn btn-primary">SIGN ME UP</Link>
                    <p>*One time offer only. Eligible for newly opted-in email addresses only. Not valid with other offers.</p>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{backgroundColor: "#f2f2f2", padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <Image width={410} height={307} className="img-fluid" src="/Hair Services Homepage banner.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Find the Right Haircare Service For You</h1>
                    <p>We look forward to giving you the haircare and haircut services you want. Great Clips salons are open 7 days a week, including Sundays.</p>
                    <Link to="/" className="btn btn-primary">SEE ALL HAIRCARE SERVICES</Link>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <Image width={410} height={307} className="img-fluid" src="/GCPBadge2.png" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>The GreatCare Promise</h1>
                    <p>At Great Clips, we care about the well-being of our customers and stylists. Learn more about the steps we are taking in the salon.</p>
                    <Link to="/" className="btn btn-primary">LEARN MORE</Link>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{backgroundColor: "#f2f2f2", padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <Image width={410} height={307} className="img-fluid" src="/salonExteriorHomepage.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Build your Legacy</h1>
                    <p>Explore hair salon franchising opportunities with Great Clips.</p>
                    <Link to="/" className="btn btn-primary">GET STARTED</Link>
                </div>
                <div className="col-md-2"></div>
            </div>


        </>
    );
}
export default IndexPage