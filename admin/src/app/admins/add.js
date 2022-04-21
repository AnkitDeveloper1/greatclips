import Joi from "joi";
import React from 'react';
import { Form } from 'react-bootstrap';
import Forms from "../components/common/form";
import AdminsService from "../services/adminsServices";

export class Add extends Forms {

    state = {
        data: { name: '', mobile: '', email: '', password: '' },
        errors: {}
    }

    schema = {
        name: Joi.string().min(3).max(30).required(),
        mobile: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(3).max(30).required(),
        confirmPassword: Joi.any().equal(Joi.ref('password'))
        .required()
        .label('Confirm password')
        .options({ messages: { 'any.only': '{{#label}} does not match'} })
    };

    doSubmit = async () => {
        const data = {
            name: this.state.data.name,
            mobile: this.state.data.mobile,
            email: this.state.data.email,
            password: this.state.data.password,
        }

        const adminDetail = await AdminsService.addAdmin(data)
        if(adminDetail) {
            setTimeout(function() { window.location = "/"; }, 5000)
        }
    }

    render() {
            
        const { errors } = this.state;

        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Form elements </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Form elements</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Admins</h4>
                                <p className="card-description"> Add </p>
                                <form className="forms-sample" onSubmit={this.handleOnSubmit}>
                                    <Form.Group>
                                        <label htmlFor="exampleInputName">Name</label>
                                        <Form.Control type="text" className="form-control" name="name" id="exampleInputName" placeholder="Name" onChange={this.handleChange} />
                                        {errors.name && <div className="alert alert-danger">{errors.name}</div>}
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputMobile">Mobile</label>
                                        <Form.Control type="text" className="form-control" name="mobile" id="exampleInputMobile" placeholder="Mobile" onChange={this.handleChange} />
                                        {errors.mobile && <div className="alert alert-danger">{errors.mobile}</div>}
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputEmail">Email</label>
                                        <Form.Control type="email" className="form-control" name="email" id="exampleInputEmail" placeholder="Email" onChange={this.handleChange} />
                                        {errors.email && <div className="alert alert-danger">{errors.email}</div>}
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputPassword">Password</label>
                                        <Form.Control type="text" className="form-control" name="password" id="exampleInputPassword" placeholder="Password" onChange={this.handleChange} />
                                        {errors.password && <div className="alert alert-danger">{errors.password}</div>}
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputConfirmPassword">Confirm Password</label>
                                        <Form.Control type="text" className="form-control" name="confirmPassword" id="exampleInputConfirmPassword" placeholder="Confirm Password" onChange={this.handleChange} />
                                        {errors.confirmPassword && <div className="alert alert-danger">{errors.confirmPassword}</div>}
                                    </Form.Group>
                                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                    <button className="btn btn-light">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add
