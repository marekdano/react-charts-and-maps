
import React, { Component } from 'react';
import logo from './logo.svg';
import hubData from './data/hubData';
import googData from './data/googData';
import Chart from './Chart.jsx';
import * as _ from 'lodash';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0, 
      data: _.cloneDeep(hubData), 
      title: 'HubSpot Stock'
    };
    this.hubSpotSelected = this.hubSpotSelected.bind(this);
    this.googleSelected = this.googleSelected.bind(this);
  }

  hubSpotSelected() {
    this.setState({
      selected: 0,
      data: _.cloneDeep(hubData),
      title: 'HubSpot Stock'
    });
  }

  googleSelected() {
    this.setState({
      selected: 1,
      data: _.cloneDeep(googData),
      title: 'Google Stock'
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Charts and google maps with React.</h2>
        </div>
        <button type='button' onClick={this.hubSpotSelected}>HubSpot</button>
        <button type='button' onClick={this.googleSelected}>Google</button>
        <Chart data={this.state.data} title={this.state.title} />
      </div>
    );
  }
}

export default App;
