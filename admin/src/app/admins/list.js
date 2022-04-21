import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import Pagination from '../components/common/pagination';
import Table from '../components/common/table';
import Filter from '../components/common/filter';
import CustomModel from '../components/common/customModel';
import Paginate from '../../utils/paginate';
import AdminsServices from "../services/adminsServices";

class Listing extends Component {

    state = {
        selectedRoles: {},
        selectRoleId: "",
        roles: {},
        deleteID: "",
        roleState: false,
        deleteState: false,
        records: [],
        itemCount: 0,
        currentPage: 1,
        pageSize: 5,
        search: { name: '', status: '' },
        columns: [
            {path: "name", label: "Name"},
            {path: "email", label: "email"},
            {path: "mobile", label: "Mobile"},
            {path: "action", label: "Action", key: "action", content: admin => <React.Fragment><Link to={`/admins/edit/${admin._id}`}><i className="fa fa-pencil"></i></Link>&nbsp;|&nbsp;<Link to="#" onClick={() => this.handleDeleteClick(admin._id)}><i className="fa fa-trash"></i></Link>&nbsp;|&nbsp;<Link to="#" onClick={() => this.handleRoleClick(admin._id)}><i className="fa fa-user"></i></Link></React.Fragment> }
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
        const { data: records } = await AdminsServices.getAdmins();
        this.setState({records: records, itemCount: records.length});

        const roles = await AdminsServices.getAdminRoles();
        this.setState({roles: roles.data})
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

    handleRoleClick = async (id) => {
        this.setState({roleState: true, selectRoleId: id});
        const admin_detail = await AdminsServices.getAdminById(id);
        this.setState({selectedRoles: admin_detail.data.assigned_roles})
    }

    handleOnClickDelete = async (e) => {
        let deleteID = this.state.deleteID;
        await AdminsServices.deleteAdmin(deleteID)
        this.setState({deleteState: false});
        e.preventDefault();
    }

    handleOnClickRoles = async (e) => {
        e.preventDefault();
        this.setState({rolesState: false});
        let admin_id = this.state.selectRoleId;
        let selectedRoles = this.state.selectedRoles;
        await AdminsServices.updateAdminRoles(admin_id, {assigned_roles: selectedRoles});
    }
    handleCloseModel = () => {
      this.setState({deleteState: false, roleState: false});
    }


    onChangeHandleRoles = (e, parent, childsval) => {
        const checked = e.target.checked;
        const values = e.target.value;
        if (checked) {
            //this.setState({selectedRoles: {...this.state.selectedRoles, [parent]: child}});
            let res = {};
            if(this.state.selectedRoles[parent]) {
                if(this.state.selectedRoles) {
                    res = {...this.state.selectedRoles, [parent]: [...this.state.selectedRoles[parent], childsval]};
                } else {
                    res = {[parent]: [...this.state.selectedRoles[parent], childsval]};
                }
            } else {
                if(this.state.selectedRoles) {
                    res = {...this.state.selectedRoles, [parent]: [childsval]};
                } else {
                    res = {[parent]: [childsval]};
                }
            }

            this.setState({selectedRoles: res});
        } else {
            let res = {};
            let roles_arr = [];
            let roles_data = Object.values(this.state.selectedRoles[parent]);
            roles_data.map(role => {
                if(role !== values) {
                    roles_arr.push(role);
                }
            })
            if(roles_arr.length !== 0) {
                res = {...this.state.selectedRoles, [parent]: roles_arr};
            } else {
                let selectedRoles = this.state.selectedRoles;
                delete selectedRoles[parent];
                res = {...selectedRoles};
            }

            this.setState({selectedRoles: res});
        }
    }
    
    render() {
        const {records, currentPage, pageSize, deleteState, roleState, roles, selectedRoles} = this.state;
        const response = records.filter(m => m.name.toLowerCase().indexOf(this.state.search.name.toLowerCase()) > -1 && m.status.toLowerCase().indexOf(this.state.search.status.toLowerCase()) > -1);
        const admins = Paginate(response, currentPage, pageSize);

        return <React.Fragment>
            <CustomModel modelName="deleteModel" modelTitle="Delete Admin" modelContent="Are You Sure want to delete the admin" buttonLabel="Delete" handleclickevent={this.handleOnClickDelete} show={deleteState} closeModel={this.handleCloseModel} />
            
            <CustomModel modelName="rolesModel" modelTitle="Admin Roles" modelContent="Plese select atleast role" data={roles} selectedRoles={selectedRoles} handleRoles={this.onChangeHandleRoles} buttonLabel="Save" handleclickevent={this.handleOnClickRoles} show={roleState} closeModel={this.handleCloseModel} />

            <div>
                <div className="page-header">
                    <h3 className="page-title"> Admins </h3>
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
                                <h4 className="card-title">Admins</h4>
                                <p className="card-description"> List Admins</p>
                                <div className="table-responsive"></div>
                                <Filter addButtonUrl="/admins/add" addButtonLabel="Add Admin" handleSearch={this.handleOnClickSearch} fields={this.state.filterFields} />
                                
                                <Table data={admins} columns={this.state.columns} />

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
