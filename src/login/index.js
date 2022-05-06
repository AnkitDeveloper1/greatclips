import Joi from "joi";
import React from "react";
import Form from "../components/common/form";
import AuthService from "../services/authServices";

class Login extends Form {

    state = {
        data: { email: '', password: '' },
        errors: {}
    }

    schema = {
        email: Joi.string().min(3).max(30).required(),
        password: Joi.string().required(),
    };

    doSubmit = async () => {
        this.state.data = {...this.state.data, user_type: 'user'}
        const loginDetail = await AuthService.login(this.state.data)
        if(loginDetail) {
          setTimeout(function() { window.location = "/"; }, 5000)
        }
    }

    render() {
        
        const { errors } = this.state;

        return (
          <>
            <div className="container">
                <h3 className="text-center">Sign In</h3>
                <form onSubmit={this.handleOnSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChange} />
                  {errors.email && <div className="alert alert-danger">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={this.handleChange} />
                  {errors.password && <div className="alert alert-danger">{errors.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary">SIGN IN</button>
                <p className="text-center">Don’t have an account? Sign up now</p>
              </form>
            </div>
          </>);
    }
}

export default Login
