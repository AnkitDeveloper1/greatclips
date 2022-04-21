import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import Pagination from '../components/common/pagination';
import Table from '../components/common/table';
import Filter from '../components/common/filter';
import CustomModel from '../components/common/customModel';
import Paginate from '../../utils/paginate';
import SaloonServices from "../services/saloonServices";

class Listing extends Component {

    state = {
        deleteID: "",
        deleteState: false,
        records: [],
        itemCount: 0,
        currentPage: 1,
        pageSize: 5,
        search: { name: '', status: '' },
        columns: [
            {path: "name", label: "Name"},
            {path: "address", label: "Address"},
            {path: "city", label: "City"},
            {path: "state", label: "State"},
            {path: "zipcode", label: "Zipcode"},
            {path: "open_hours", label: "Open Hours", key: "open_hours", content: saloon => (saloon.open_hours.map((hour, index) => (
              <p key={index}>{hour}</p>
            )))},
            {path: "status", label: "Status"},
            {path: "action", label: "Action", key: "action", content: saloon => <React.Fragment><Link to={`/saloons/edit/${saloon._id}`}><i className="fa fa-pencil"></i></Link>&nbsp;|&nbsp;<Link to="#" onClick={() => this.handleDeleteClick(saloon._id)}><i className="fa fa-trash"></i></Link></React.Fragment> }
        ],
        filterFields: [
            {
                type: "text",
                name: "name",
                placeholder: "Name",
            },
            {
                type: "select",
                name: "status",
                options: [
                    {label: "-- Select Status --", value: ""},
                    {label: "Enabled", value: "enabled"},
                    {label: "Disabled", value: "disabled"}
                ]
            }
        ]
    };

    async componentDidMount() {
        const { data: records } = await SaloonServices.getSaloons();
        this.setState({records: records, itemCount: records.length});
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    }
    
    handleOnClickSearch = e => {
        const search_array = _(e.target).slice(0).take(e.target.length-1).value();
        let search_state = {...this.state.search}
        search_array.map(search => (
            search_state[search.name] = search.value
        ))
        this.setState({ search: search_state });
        
        e.preventDefault();
    }

    handleDeleteClick = (id) => {
        this.setState({deleteID: id, deleteState: true});
    }

    handleOnClickDelete = async (e) => {
        let deleteID = this.state.deleteID;
        await SaloonServices.deleteSaloon(deleteID)
        this.setState({deleteState: false});
        e.preventDefault();
    }
    handleCloseModel = () => {
      this.setState({deleteState: false});
    }
    
    render() {
        const {records, currentPage, pageSize, deleteState} = this.state;
        const response = records.filter(m => m.name.toLowerCase().indexOf(this.state.search.name.toLowerCase()) > -1 && m.status.toLowerCase().indexOf(this.state.search.status.toLowerCase()) > -1);
        const saloons = Paginate(response, currentPage, pageSize);

        return <React.Fragment>
            <CustomModel modelName="deleteModel" modelTitle="Delete Saloon" modelContent="Are You Sure want to delete the saloon" buttonLabel="Delete" handleclickevent={this.handleOnClickDelete} show={deleteState} closeModel={this.handleCloseModel} />

            <div>
                <div className="page-header">
                    <h3 className="page-title"> Saloons </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Saloons</h4>
                                <p className="card-description"> List Saloons</p>
                                <div className="table-responsive"></div>
                                <Filter addButtonUrl="/saloons/add" addButtonLabel="Add Saloon" handleSearch={this.handleOnClickSearch} fields={this.state.filterFields} />
                                
                                <Table data={saloons} columns={this.state.columns} />

                                <Pagination itemCount={response.length} currentPage={this.state.currentPage} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }

}

export default Listing
