import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });
  } 
  render () {
    const { userName } = this.props;
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        {
          //<div className="text-center sidebar-brand-wrapper d-flex align-items-center">
            //<a className="sidebar-brand brand-logo" href="index.html"><img src={require("../../assets/images/logo.svg")} alt="logo" /></a>
            //<a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src={require("../../assets/images/logo-mini.svg" )} alt="logo" /></a>
          //</div>
        }
        <ul className="nav">
          <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="profile-image">
                    <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face8.jpg")} alt="profile" />
                      <div className="dot-indicator bg-success"></div>
                    </div>
                    <div className="text-wrapper">
                      <p className="profile-name">{userName}</p>
                      <p className="designation">Admin</p>
                    </div>
                    
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    <Trans>Manage Accounts</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    <Trans>Change Password</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    <Trans>Check Inbox</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    <Trans>Sign Out</Trans>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
      
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/saloons') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/saloons">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><Trans>Manage Saloons</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/admins">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><Trans>Manage Admins</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/saloons">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><Trans>Manage Users</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/saloons">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><Trans>Manage Reports</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/saloons">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><Trans>Manage Pages</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/saloons">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><Trans>Settings</Trans></span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);