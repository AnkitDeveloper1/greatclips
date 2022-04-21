import { Component } from "react";
import UsersService from "../services/authServices";

class Logout extends Component {

    componentDidMount() {
        UsersService.logout();
        window.location = "/admin/login";
    }

    render() {
        return null;
    }
}

export default Logout
