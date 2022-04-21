import React, { Component } from "react";
import { format } from 'date-fns'

import AttendServices from "../services/attendServices";
import AuthService from "../services/authServices";

class HistoryPage extends Component {

    state = {
        saloonUserHistory: ""
    }

    componentDidMount = async() => {
        const current_user = AuthService.getCurrentUser();
        const saloon_list = await AttendServices.attendUserHistory(current_user._id);
        let saloonUserHistory = saloon_list.data;
        console.log(saloonUserHistory)
        
        saloonUserHistory = saloonUserHistory.map((history, index) => {
            return (<tr key={index}>
                <td className="row">{index+1}</td>
                <td>{history.userDetail.map(saloon => ( saloon.name ))}</td>
                <td>{history.saloonDetail.map(saloon => ( saloon.name ))}</td>
                <td>{format(new Date(history.check_in), 'dd MMMM, yyyy h:i:s a')}</td>
                <td>{history.check_out?format(new Date(history.check_out), 'dd MMMM, yyyy h:i:s a'):""}</td>
                <td>{history.status?history.status:"Pending"}</td>
            </tr>)
        })

        this.setState({saloonUserHistory: saloonUserHistory});
    }
    
    render() {

        const { saloonUserHistory } = this.state;
        
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">UserId</th>
                            <th scope="col">SaloonId</th>
                            <th scope="col">CheckIn</th>
                            <th scope="col">CheckOut</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {saloonUserHistory}
                    </tbody>
                </table>
            </>
        );
    }
}


// Wrap and export
export default HistoryPage
