
import React, { Component } from 'react';
import logo from './logo.svg';
import hubData from './data/hubData';
import googData from './data/googData';
import ChartD3 from './ChartD3.jsx';
import ChartHighstock from './ChartHighstock';
import * as _ from 'lodash';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0, 
      data: _.cloneDeep(hubData), 
      title: 'HubSpot Stock in D3',
      type: 'd3'
    };
    this.hubSpotInD3Selected = this.hubSpotInD3Selected.bind(this);
    this.googleInD3Selected = this.googleInD3Selected.bind(this);
    this.hubSpotInHighchartSelected = this.hubSpotInHighchartSelected.bind(this);
    this.googleInHighchartSelected = this.googleInHighchartSelected.bind(this);
  }

  hubSpotInD3Selected() {
    this.setState({
      selected: 0,
      data: _.cloneDeep(hubData),
      title: 'HubSpot Stock in D3',
      type: 'd3'
    });
  }

  googleInD3Selected() {
    this.setState({
      selected: 1,
      data: _.cloneDeep(googData),
      title: 'Google Stock in D3',
      type: 'd3'
    });
  }

  hubSpotInHighchartSelected() {
    console.log("hubSpot In Highchart Selected method");
    this.setState({
      selected: 2,
      data: _.cloneDeep(hubData),
      title: 'HubSpot Stock in Highchart',
      type: 'highchart'
    });
  }

  googleInHighchartSelected() {
    console.log("google In Highchart Selected method");
    this.setState({
      selected: 3,
      data: _.cloneDeep(googData),
      title: 'Google Stock in Highchart',
      type: 'highchart'
    });
  }

  render() {
    let chart;
    if (this.state.type === 'd3')
      chart = <ChartD3 data={this.state.data} title={this.state.title} />
    else if (this.state.type === 'highchart')
      chart = <ChartHighstock data={this.state.data} title={this.state.title} />

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Charts and google maps with React.</h2>
        </div>
        <button type='button' onClick={this.hubSpotInD3Selected}>HubSpot + D3</button>
        <button type='button' onClick={this.googleInD3Selected}>Google + D3</button>

        <button type='button' onClick={this.hubSpotInHighchartSelected}>HubSpot + Highchart</button>
        <button type='button' onClick={this.googleInHighchartSelected}>Google + Highchart</button>

        {chart}
        
        
      </div>
    );
  }
}

export default App;
