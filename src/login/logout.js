import { Component } from "react";
import AuthService from "../services/authServices";

class Logout extends Component {

    componentDidMount() {
        AuthService.logout();
        window.location = "/login";
    }

    render() {
        return null; 
    }
}

export default Logout
