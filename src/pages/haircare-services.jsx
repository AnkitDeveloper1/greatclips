import React from "react";

function HairCareServices() {

    return (
        <>
            <h1 className="text-center">Haircuts and Hair Salon Services Near You</h1>
            <img className="img-fluid" src="/HaircareServicesPage.jpg" />

            <div className="container-fluid">
                <h3 className="text-center">Hundreds of hair styles, one great haircut.</h3>
                <p>We look forward to giving you the haircut you want. To make it more convenient for you, use Online Check-In to add your name to the waitlist at a hair salon near you.<br />We want all our customers to feel confident and happy leaving the salon, which is why your complete satisfaction on all services and products is fully guaranteed. When you're at Great Clips, you know It's Gonna Be Great.</p>
                <h4>Hair Salon Services at Great Clips</h4>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <h3>Haircut Services for Everyone</h3>
                        <ul>
                            <li><b>Haircuts for Men and Women:</b> At Great Clips, we offer quality haircuts for both men and women.</li>
                            <li><b>Haircuts for Kids:</b> Kids are welcome at Great Clips. Our professionally trained stylists offer the same great service for kids as we do for adults.</li>
                            <li><b>Haircuts for Seniors:</b> Great Clips offers the same great haircut services for seniors. Check with your local great clips salon for more information on senior discounts.</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Hair Services</h3>
                        <ul>
                            <li><b>Neck Trim:</b> Complimentary trim and detailing with every haircut to clean up excess hair around the neck.</li>
                            <li><b>Beard Trim:</b> Quick touch-up to keep your beard looking sharp.</li>
                            <li><b>Bang Trim:</b> Between hair appointments and your bangs are getting long? Come see us for a quick touch-up.</li>
                            <li><b>Hair Shampoo:</b> Shampoo Service with some of our favorite professional hair products.</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Hair Styling</h3>
                        <ul>
                            <li><b>Short Style:</b> Our stylists are professionally trained in styling your short hair including the crew cut, undercut, and fade for men, and the bob or pixie cut for women.</li>
                            <li><b>Long Style:</b> Our stylists are professionally trained in styling your long hair. Some common styles for longer hair are layers or bangs.</li>
                            <li><b>Formal Style:</b> Getting ready for your big day or have a special event coming up? Our stylists are skilled at making your vision come to life.</li>
                            <li><b>Perm:*</b> A perm is a chemical treatment that adds waves or curls to your hair. Perm services vary by location.</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <a className="btn btn-primary" href="">FIND A SALON NEAR YOU</a>

                    <p>Hair salon service pricing varies by location. Check with your nearby Great Clips hair salon for pricing.</p>
                    <p><i>*Not all Great Clips hair salons offer perms. Please contact your salon for availability.</i></p>
                </div>
            </div>
        </>
    );
}
export default HairCareServices