import Joi from "joi";
import React from "react";
import Form from "../components/common/form";
import RegisterService from "../services/registerServices";

class Register extends Form {

    render() {
        
        const { errors } = this.state;

        return (
            <>
                <h1>Saloon List</h1>
            </>
        );
    }
}

export default Register
