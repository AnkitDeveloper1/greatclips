import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import { useTimer } from 'react-timer-hook';

import SaloonServices from "../services/saloonServices";
import AttendServices from "../services/attendServices";
import AuthService from "../services/authServices";

function MyTimer({ expiryTimestamp }) {
    const { minutes } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    
    return (
        <span>{minutes}</span>
    );
}

class SaloonDetailPage extends Component {

    state = {
        saloonList: {},
        attendList: {}
    }

    componentDidMount = async() => {
        const { route } = this.props;
        
        const saloon_list = await SaloonServices.getSaloonById(route.id);
        this.setState({saloonList: saloon_list.data});

        const current_user = AuthService.getCurrentUser();
        if(current_user) {
            const data = {user_id: current_user._id, saloon_id: route.id};
            const attend_list = await AttendServices.getAttendDetail(data);
            this.setState({attendList: attend_list.data});
        }

    }

    handleCheckInNow = async (saloon_id) => {
        const current_user = AuthService.getCurrentUser();
        const data = {user_id: current_user._id, saloon_id: saloon_id};
        const response = await AttendServices.addAttend(data);
        console.log(response)
    }

    handleCheckOutNow = async (saloon_id) => {
        const current_user = AuthService.getCurrentUser();
        const data = {user_id: current_user._id, saloon_id: saloon_id};
        const response = await AttendServices.attendCheckOut(data);
        console.log(response)
    }
    
    render() {
        const { route, userName } = this.props;
        const { saloonList, attendList } = this.state;
        
        const time = new Date();
        time.setSeconds(time.getSeconds() + 1200); // 10 minutes timer

        return (
            <>
                <div className="row">
                    <div className="col-md-6">
                        <h1>{saloonList.name}</h1>
                        <p>Open</p>
                        <p>{saloonList.open_hours}</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Online Check-in</h3>
                        {userName?
                        (attendList && attendList.check_in && (!attendList.check_out || attendList.check_out === "undefined")?<button className="btn btn-primary" onClick={(e) => this.handleCheckOutNow(route.id)}>Check Out</button>:<button className="btn btn-primary" onClick={(e) => this.handleCheckInNow(route.id)}>Check In Now</button>)
                        :<Link to="/login">Click Here To Login</Link>}
                        <p>Estimated wait: </p>
                        <p>Check in online to add your name to the wait list before you arrive</p>
                        {userName && attendList && attendList.check_in && (!attendList.check_out || attendList.check_out === "undefined")?
                        <h1><MyTimer expiryTimestamp={time} /><br />MIN</h1>
                        :""}
                    </div>
                </div>
            </>
        );
    }
}


// Wrap and export
export default function Test(props) {
    const route = useParams();
  
    return <SaloonDetailPage {...props} route={route} />;
}
