import React, { Component } from "react";
import './App.css';
import Main from './main';

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      latitude: '',
      longitude: '',
    }
    
    this.getMyLocation = this.getMyLocation.bind(this)
  }
  
  componentDidMount() {
    //this.getMyLocation()
  }

  getMyLocation = () => {
    const location = window.navigator && window.navigator.geolocation
    
    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }
  }

  render() {
    const { latitude, longitude } = this.state
    
    return (
      <>
        <div className="App">
          <Main currentLocation={{latitude: latitude, longitude: longitude}} actionMyLocation={this.getMyLocation}/>
        </div>
      </>
    )
  }
}

export default App;
