import React, { useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import SaloonServices from "../services/saloonServices";
import { useNavigate } from 'react-router-dom';

function IndexPage(props) {
    const [saloonList, setSaloonList] = useState(0);
    
    const getItems = async () => {
        if(!saloonList) {
            const saloon_list = await SaloonServices.getSaloons();
            setSaloonList(saloon_list.data);
        }
    }
    getItems()
    const items = saloonList

    let navigate = useNavigate();
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }
    
    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }
    
    const handleOnSelect = (item) => {
        // the item selected
        console.log(item);
        navigate('/saloon/'+item._id);
    }
    
    const handleOnFocus = () => {
        console.log('Focused')
    }
    
    const formatResult = (item) => {
        return (
            <>
            <span style={{ display: 'block', textAlign: 'left' }}>id: {item._id}</span>
            <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
            </>
        )
    }

    return (
        <>
            <div className="row">
                <img src="/home_banner_page.jpg" alt="Home Page" />
            </div>
            <div className="row p-4">
                <div className="col"></div>
                <div className="col-9">
                    <label>Search City, State or Postal Code</label>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        formatResult={formatResult}
                        placeholder="Find a Salon"
                    />
                    <div className="text-center">
                        <h3>Great Clips Online Check-In</h3>
                        <p>What is Online Check-in?</p>
                        <img src="/teal-pin.png" onClick={props.actionMyLocation} width="200" />
                        <h3>Check In for map and<br />estimated wait times</h3>
                    </div>
                </div>
                <div className="col"></div>
                <p>For those whose accessibility needs require more assistive channels, Great Clips can facilitate the use of Online Check-In through appropriate communication methods consistent with applicable law guidelines. Please call us toll-free at  1-800-473-2825 or email us at customerservice@greatclips.com. See https://www.greatclips.com/accessibility-notice for more detail.</p>
            </div>

            <div className="row" style={{backgroundColor: "#f2f2f2", padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/Homepage Recruiting Image_560x420.png" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Great Clips salons are hiring!</h1>
                    <p>Are you looking for a fun and rewarding career with the world’s largest salon brand? With over 4,400 locations, an award-winning educational system, and an immediate customer base…GREAT career opportunities await. Join a salon team and Be One of the Greats!</p>
                    <a href="" className="btn btn-primary">SEARCH JOB OPENINGS</a>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/Coupons560x420.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Sign Up Now For $2 Off</h1>
                    <p>Sign up to receive the latest deals, news and hair trend tips. As a thank you, we will email you a coupon for $2 off your next haircut.</p>
                    <a href="" className="btn btn-primary">SIGN ME UP</a>
                    <p>*One time offer only. Eligible for newly opted-in email addresses only. Not valid with other offers.</p>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{backgroundColor: "#f2f2f2", padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/Hair Services Homepage banner.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Find the Right Haircare Service For You</h1>
                    <p>We look forward to giving you the haircare and haircut services you want. Great Clips salons are open 7 days a week, including Sundays.</p>
                    <a href="" className="btn btn-primary">SEE ALL HAIRCARE SERVICES</a>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/GCPBadge2.png" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>The GreatCare Promise</h1>
                    <p>At Great Clips, we care about the well-being of our customers and stylists. Learn more about the steps we are taking in the salon.</p>
                    <a href="" className="btn btn-primary">LEARN MORE</a>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row" style={{backgroundColor: "#f2f2f2", padding: "100px 0px"}}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/salonExteriorHomepage.jpg" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h1>Build your Legacy</h1>
                    <p>Explore hair salon franchising opportunities with Great Clips.</p>
                    <a href="" className="btn btn-primary">GET STARTED</a>
                </div>
                <div className="col-md-2"></div>
            </div>


        </>
    );
}
export default IndexPage