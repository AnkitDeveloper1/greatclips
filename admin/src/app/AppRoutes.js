import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const AddSaloon = lazy(() => import('./saloon/add'));
const EditSaloon = lazy(() => import('./saloon/edit'));
const ListSaloon = lazy(() => import('./saloon/list'));

const AddAdmins = lazy(() => import('./admins/add'));
const EditAdmin = lazy(() => import('./admins/edit'));
const ListAdmin = lazy(() => import('./admins/list'));

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./login/Login'));
const Logout = lazy(() => import('./login/logout'));


class AppRoutes extends Component {

  render () {
    
    const { userName } = this.props;

    return (
      <>
        <Suspense fallback={<Spinner/>}>
          <Switch>
            <Route exact path="/dashboard">
              {!userName?<Redirect to="/login" />:<Dashboard />}
            </Route>

            <Route path="/saloons/add">
              {!userName?<Redirect to="/login" />:<AddSaloon />}
            </Route>
            <Route path="/saloons/edit/:id">
              {!userName?<Redirect to="/login" />:<EditSaloon />}
            </Route>
            <Route path="/saloons">
              {!userName?<Redirect to="/login" />:<ListSaloon />}
            </Route>

            <Route path="/admins/add">
              {!userName?<Redirect to="/login" />:<AddAdmins />}
            </Route>
            <Route path="/admins/edit/:id">
              {!userName?<Redirect to="/login" />:<EditAdmin />}
            </Route>
            <Route path="/admins">
              {!userName?<Redirect to="/login" />:<ListAdmin />}
            </Route>

            <Route path="/login">
              {userName?<Redirect to="/dashboard" />:<Login />}
            </Route>
            <Route path="/logout" component={ Logout } />

            <Route path="/error-pages/error-404" component={ Error404 } />
            <Route path="/error-pages/error-500" component={ Error500 } />

            <Redirect to="/login" />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default AppRoutes;