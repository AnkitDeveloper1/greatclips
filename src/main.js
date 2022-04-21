import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthService from "./services/authServices";

import Header from "./includes/header";

import Login from './login/index';
import Logout from './login/logout';
import Register from './register/index';
import Home from './pages/home';
import SaloonPage from "./saloon/index";
import SaloonDetailPage from "./saloon/detail";
import HistoryPage from "./profile/history";

import "react-toastify/dist/ReactToastify.css";
import HairCareServices from "./pages/haircare-services";
import Promotions from "./pages/promotions/index";
import PaulMitchellSale from "./pages/promotions/paul-mitchell-sale";
import Coupons from "./pages/promotions/coupons";
import SeniorDiscounts from "./pages/promotions/senior-discounts";
import NHLPartnership from "./pages/promotions/nhl-partnership";
import MonsterJam from "./pages/promotions/monster-jam";

class Main extends Component {

    user = {}
    constructor() {
        super();
        this.user = AuthService.getCurrentUser();
    }
    
    render() {
        const { currentLocation, actionMyLocation } = this.props;
        console.log(currentLocation);
        return (<React.Fragment>
            <Header userName={this.user?this.user.name:''} />
            <div style={{position: "relative", top: "87px"}}>
                <ToastContainer />
                <Routes>
                    <Route path="/login" element={this.user?<Navigate to="/" />:<Login />} />
                    <Route path="/register" element={this.user?<Navigate to="/" />:<Register />} />
                    <Route path="/logout" element={<Logout />} />

                    <Route path="/" element={<Home actionMyLocation={actionMyLocation} />} />
                    
                    <Route path="/saloon" element={<SaloonPage userName={this.user?this.user.name:''} actionMyLocation={actionMyLocation} />} />
                    <Route path="/saloon/:id" element={<SaloonDetailPage userName={this.user?this.user.name:''} actionMyLocation={actionMyLocation} />} />

                    <Route path="/history" element={<HistoryPage userName={this.user?this.user.name:''} actionMyLocation={actionMyLocation} />} />
                    
                    <Route path="/haircare-services" element={<HairCareServices userName={this.user?this.user.name:''} actionMyLocation={actionMyLocation} />} />
                    
                    <Route path="/promotions" element={<Promotions userName={this.user?this.user.name:''} actionMyLocation={actionMyLocation} />} />
                    <Route path="/promotions/paul-mitchell-sale" element={<PaulMitchellSale userName={this.user?this.user.name:''} actionMyLocation={actionMyLocation} />} />
                    <Route path="/promotions/coupons" element={<Coupons userName={this.user?this.user.name:''} actionMyLocation={actionMyLocation} />} />
                    <Route path="/promotions/senior-discounts" element={<SeniorDiscounts userName={this.user?this.user.name:''} actionMyLocation={actionMyLocation} />} />
                    <Route path="/promotions/nhl-partnership" element={<NHLPartnership userName={this.user?this.user.name:''} actionMyLocation={actionMyLocation} />} />
                    <Route path="/promotions/monster-jam" element={<MonsterJam userName={this.user?this.user.name:''} actionMyLocation={actionMyLocation} />} />
                    
                    <Route path="/" element={<Navigate to="/" />} />
                    <Route path='*' exact={true} element={<Navigate to="/" />} />
                </Routes>
            </div>
        </React.Fragment>)
    }

}

export default Main
