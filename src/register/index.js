import Joi from "joi";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import _ from "lodash";

import Config from "../config.json";
import Form from "../components/common/form";
import RegisterService from "../services/registerServices";

class Register extends Form {

    state = {
        data: { name: '', mobile: '', email: '', password: '', captcha: '' },
        errors: {}
    }

    schema = {
        name: Joi.string().min(3).max(30).required(),
        mobile: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(3).max(30).required(),
        password: Joi.string().required(),
        captcha: Joi.string().required().options({ messages: { "any.required": "Please interact with reCAPTCHA" } }),
        confirmPassword: Joi.any().equal(Joi.ref('password'))
        .required()
        .label('Confirm password')
        .options({ messages: { 'any.only': '{{#label}} does not match'} })
    };

    doSubmit = async () => {
        _.unset(this.state.data, "captcha");

        const registerRes = await RegisterService.register(this.state.data)
        if(registerRes) {
          setTimeout(function() { window.location = "/"; }, 5000)
        }
    }

    onChangeCaptcha = (value) => {
        console.log("Captcha value:", value);
        this.setState({data: {...this.state.data, captcha: value}})
    }
    
    render() {
        const { errors } = this.state;

        return (
        <>
            <div className="container">
                <h3 className="text-center">SignUp</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        {errors.email && <div className="alert alert-danger">{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="inputPassword" onChange={this.handleChange} />
                        {errors.password && <div className="alert alert-danger">{errors.password}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" name="confirmPassword" className="form-control" id="inputConfirmPassword" onChange={this.handleChange} />
                        {errors.confirmPassword && <div className="alert alert-danger">{errors.confirmPassword}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" name="name" className="form-control" id="inputName" onChange={this.handleChange} />
                        {errors.name && <div className="alert alert-danger">{errors.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputMobile" className="form-label">Mobile Number</label>
                        <input type="text" name="mobile" className="form-control" id="inputMobile" onChange={this.handleChange} />
                        {errors.mobile && <div className="alert alert-danger">{errors.mobile}</div>}
                    </div>
                    <div className="mb-3 form-check">
                        <p>By creating a profile, you agree to the Great Clips Terms of Use and Privacy Notice.</p>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">I agree to receive news, exclusive offers, and more from Great Clips. You can unsubscribe at any time.</label>
                    </div>
                    <div className="mb-3">
                        <ReCAPTCHA sitekey={Config.GOOGLE_RECAPTCHA} onChange={this.onChangeCaptcha} />
                        {errors.captcha && <div className="alert alert-danger">{errors.captcha}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">CREATE PROFILE</button>
                </form>
            </div>
        </>
        );
    }
}

export default Register
