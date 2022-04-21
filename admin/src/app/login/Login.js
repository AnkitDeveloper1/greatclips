import Joi from "joi";
import React from "react";
import { Form } from 'react-bootstrap';
import Forms from "../components/common/form";
import UsersService from "../services/authServices";

export class Login extends Forms {

  state = {
    data: { email: '', password: '', user_type: 'admin' },
    errors: {}
  }

  schema = {
    email: Joi.string().min(3).max(30).required(),
    password: Joi.string().required(),
  };

  doSubmit = async () => {
    const loginDetail = await UsersService.login(this.state.data)
    if(loginDetail) {
      setTimeout(function() { window.location = "/"; }, 5000)
    }
  }

  render() {

    const { errors } = this.state;

    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3" onSubmit={this.handleOnSubmit}>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" placeholder="Username" size="lg" className="h-auto" name="email" onChange={this.handleChange} />
                  </Form.Group>
                  {errors.email && <div className="alert alert-danger">{errors.email}</div>}
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" name="password" onChange={this.handleChange} />
                  </Form.Group>
                  {errors.password && <div className="alert alert-danger">{errors.password}</div>}
                  <div className="mt-3">
                    <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default Login
