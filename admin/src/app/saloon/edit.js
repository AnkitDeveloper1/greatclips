import Joi from "joi";
import React from 'react';
import { useParams } from "react-router-dom";
import { Form } from 'react-bootstrap';
import Forms from "../components/common/form";
import SaloonService from "../services/saloonServices";

export class Edit extends Forms {

    state = {
        saloons: [],
        data: { name: '', address: '', city: '', state: '', zipcode: '', monday_start_time: '', monday_end_time: '', tuesday_start_time: '', tuesday_end_time: '', wednesday_start_time: '', wednesday_end_time: '', thursday_start_time: '', thursday_end_time: '', friday_start_time: '', friday_end_time: '', saturday_start_time: '', saturday_end_time: '', sunday_start_time: '', sunday_end_time: '', status: 'enabled' },
        errors: {}
    }

    schema = {
        name: Joi.string().min(3).max(30).required(),
        address: Joi.string().min(3).max(30).required(),
        city: Joi.string().min(3).max(30).required(),
        state: Joi.string().min(3).max(30).required(),
        zipcode: Joi.string().min(3).max(30).required(),
        monday_start_time: Joi.string().required(),
        monday_end_time: Joi.string().required(),
        tuesday_start_time: Joi.string().required(),
        tuesday_end_time: Joi.string().required(),
        wednesday_start_time: Joi.string().required(),
        wednesday_end_time: Joi.string().required(),
        thursday_start_time: Joi.string().required(),
        thursday_end_time: Joi.string().required(),
        friday_start_time: Joi.string().required(),
        friday_end_time: Joi.string().required(),
        saturday_start_time: Joi.string().required(),
        saturday_end_time: Joi.string().required(),
        sunday_start_time: Joi.string().required(),
        sunday_end_time: Joi.string().required(),
        status: Joi.string().required(),
    };

    async componentDidMount() {
        const { route } = this.props;
        const editSaloons = await SaloonService.getSaloonById(route.id);
        
        const open_hours = editSaloons.data.open_hours;
        
        // Monday
        let open_hours_time = open_hours[0].split(" - ");
        const monday_start_time = open_hours_time[0];
        const monday_end_time = open_hours_time[1];
        
        // Tuesday
        open_hours_time = open_hours[1].split(" - ");
        const tuesday_start_time = open_hours_time[0];
        const tuesday_end_time = open_hours_time[1];

        // Wednesday
        open_hours_time = open_hours[2].split(" - ");
        const wednesday_start_time = open_hours_time[0];
        const wednesday_end_time = open_hours_time[1];

        // Thursday
        open_hours_time = open_hours[3].split(" - ");
        const thursday_start_time = open_hours_time[0];
        const thursday_end_time = open_hours_time[1];

        // Friday
        open_hours_time = open_hours[4].split(" - ");
        const friday_start_time = open_hours_time[0];
        const friday_end_time = open_hours_time[1];

        // Saturday
        open_hours_time = open_hours[5].split(" - ");
        const saturday_start_time = open_hours_time[0];
        const saturday_end_time = open_hours_time[1];

        // Sunday
        open_hours_time = open_hours[6].split(" - ");
        const sunday_start_time = open_hours_time[0];
        const sunday_end_time = open_hours_time[1];

        const data = {
            name: editSaloons.data.name,
            address: editSaloons.data.address,
            city: editSaloons.data.city,
            state: editSaloons.data.state,
            zipcode: editSaloons.data.zipcode,
            monday_start_time: monday_start_time,
            monday_end_time: monday_end_time,
            tuesday_start_time: tuesday_start_time,
            tuesday_end_time: tuesday_end_time,
            wednesday_start_time: wednesday_start_time,
            wednesday_end_time: wednesday_end_time,
            thursday_start_time: thursday_start_time,
            thursday_end_time: thursday_end_time,
            friday_start_time: friday_start_time,
            friday_end_time: friday_end_time,
            saturday_start_time: saturday_start_time,
            saturday_end_time: saturday_end_time,
            sunday_start_time: sunday_start_time,
            sunday_end_time: sunday_end_time,
            status: editSaloons.data.status,
        };
        
        this.setState({data: data})
    }

    doSubmit = async () => {
        const { route } = this.props;
        const id = route.id;
        
        const data = {
            name: this.state.data.name,
            address: this.state.data.address,
            city: this.state.data.city,
            state: this.state.data.state,
            zipcode: this.state.data.zipcode,
            open_hours: [
                this.state.data.monday_start_time+" - "+this.state.data.monday_end_time,
                this.state.data.tuesday_start_time+" - "+this.state.data.tuesday_end_time,
                this.state.data.wednesday_start_time+" - "+this.state.data.wednesday_end_time,
                this.state.data.thursday_start_time+" - "+this.state.data.thursday_end_time,
                this.state.data.friday_start_time+" - "+this.state.data.friday_end_time,
                this.state.data.saturday_start_time+" - "+this.state.data.saturday_end_time,
                this.state.data.sunday_start_time+" - "+this.state.data.sunday_end_time,
            ],
            status: this.state.data.status,
        }

        const saloonDetail = await SaloonService.updateSaloon(id, data)
        if(saloonDetail) {
            setTimeout(function() { window.location = "/"; }, 5000)
        }
    }

    render() {
            
        const { data, errors } = this.state;

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
                                <h4 className="card-title">Saloons</h4>
                                <p className="card-description"> Edit </p>
                                <form className="forms-sample" onSubmit={this.handleOnSubmit}>
                                    <Form.Group>
                                        <label htmlFor="exampleInputName">Name</label>
                                        <Form.Control type="text" className="form-control" name="name" id="exampleInputName" placeholder="Name" value={data.name} onChange={this.handleChange} />
                                        {errors.name && <div className="alert alert-danger">{errors.name}</div>}
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputAddress">Address</label>
                                        <Form.Control type="text" className="form-control" name="address" id="exampleInputAddress" placeholder="Address" value={data.address} onChange={this.handleChange} />
                                        {errors.address && <div className="alert alert-danger">{errors.address}</div>}
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputCity">City</label>
                                        <Form.Control type="text" className="form-control" name="city" id="exampleInputCity" placeholder="City" value={data.city} onChange={this.handleChange} />
                                        {errors.city && <div className="alert alert-danger">{errors.city}</div>}
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputState">State</label>
                                        <Form.Control type="text" className="form-control" name="state" id="exampleInputState" placeholder="State" value={data.state} onChange={this.handleChange} />
                                        {errors.state && <div className="alert alert-danger">{errors.state}</div>}
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputZipcode">Zipcode</label>
                                        <Form.Control type="text" className="form-control" name="zipcode" id="exampleInputZipcode" placeholder="Zipcode" value={data.zipcode} onChange={this.handleChange} />
                                        {errors.zipcode && <div className="alert alert-danger">{errors.zipcode}</div>}
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputStatus">Status</label>
                                        <select className="form-control" name="status" id="exampleInputStatus" value={data.status} onChange={this.handleChange}>
                                            <option value="enabled">Enabled</option>
                                            <option value="disabled">Disabled</option>
                                        </select>
                                        {errors.status && <div className="alert alert-danger">{errors.status}</div>}
                                    </Form.Group>
                                    <Form.Group>
                                        <h3>Open Hours</h3>
                                        <div className="row">
                                            <label className="col-md-2">Monday</label>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="Start Time" name="monday_start_time" value={data.monday_start_time} onChange={this.handleChange} />
                                                {errors.monday_start_time && <div className="alert alert-danger">{errors.monday_start_time}</div>}
                                            </div>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="End Time" name="monday_end_time" value={data.monday_end_time} onChange={this.handleChange} />
                                                {errors.monday_end_time && <div className="alert alert-danger">{errors.monday_end_time}</div>}
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <label className="col-md-2">Tuesday</label>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="Start Time" name="tuesday_start_time" value={data.tuesday_start_time} onChange={this.handleChange} />
                                                {errors.tuesday_start_time && <div className="alert alert-danger">{errors.tuesday_start_time}</div>}
                                            </div>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="End Time" name="tuesday_end_time" value={data.tuesday_end_time} onChange={this.handleChange} />
                                                {errors.tuesday_end_time && <div className="alert alert-danger">{errors.tuesday_end_time}</div>}
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <label className="col-md-2">Wednesday</label>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="Start Time" name="wednesday_start_time" value={data.wednesday_start_time} onChange={this.handleChange} />
                                                {errors.wednesday_start_time && <div className="alert alert-danger">{errors.wednesday_start_time}</div>}
                                            </div>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="End Time" name="wednesday_end_time" value={data.wednesday_end_time} onChange={this.handleChange} />
                                                {errors.wednesday_end_time && <div className="alert alert-danger">{errors.wednesday_end_time}</div>}
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <label className="col-md-2">Thursday</label>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="Start Time" name="thursday_start_time" value={data.thursday_start_time} onChange={this.handleChange} />
                                                {errors.thursday_start_time && <div className="alert alert-danger">{errors.thursday_start_time}</div>}
                                            </div>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="End Time" name="thursday_end_time" value={data.thursday_end_time} onChange={this.handleChange} />
                                                {errors.thursday_end_time && <div className="alert alert-danger">{errors.thursday_end_time}</div>}
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <label className="col-md-2">Friday</label>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="Start Time" name="friday_start_time" value={data.friday_start_time} onChange={this.handleChange} />
                                                {errors.friday_start_time && <div className="alert alert-danger">{errors.friday_start_time}</div>}
                                            </div>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="End Time" name="friday_end_time" value={data.friday_end_time} onChange={this.handleChange} />
                                                {errors.friday_end_time && <div className="alert alert-danger">{errors.friday_end_time}</div>}
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <label className="col-md-2">Saturday</label>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="Start Time" name="saturday_start_time" value={data.saturday_start_time} onChange={this.handleChange} />
                                                {errors.saturday_start_time && <div className="alert alert-danger">{errors.saturday_start_time}</div>}
                                            </div>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="End Time" name="saturday_end_time" value={data.saturday_end_time} onChange={this.handleChange} />
                                                {errors.saturday_end_time && <div className="alert alert-danger">{errors.saturday_end_time}</div>}
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <label className="col-md-2">Sunday</label>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="Start Time" name="sunday_start_time" value={data.sunday_start_time} onChange={this.handleChange} />
                                                {errors.sunday_start_time && <div className="alert alert-danger">{errors.sunday_start_time}</div>}
                                            </div>
                                            <div className="col-md-5">
                                                <Form.Control type="text" className="form-control" placeholder="End Time" name="sunday_end_time" value={data.sunday_end_time} onChange={this.handleChange} />
                                                {errors.sunday_end_time && <div className="alert alert-danger">{errors.sunday_end_time}</div>}
                                            </div>
                                        </div>
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

// Wrap and export
export default function Test(props) {
    const route = useParams();
  
    return <Edit {...props} route={route} />;
}
