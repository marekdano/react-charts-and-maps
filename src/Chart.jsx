
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import chart from './chart.js';
import * as _ from 'lodash';

class Chart extends Component {

  componentDidMount() {
    let el = ReactDOM.findDOMNode(this);
		console.log("el in componentDidMount", el);

		chart.create(el, {}, this.getChartState());
  }

  componentDidUpdate() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps.data, this.props.data);
  }

  getChartState() {
    return {
      data: this.props.data,
      title: this.props.title
    };
  }

  componentWillUnmount() {
    let el = ReactDOM.findDOMNode(this);
		console.log("el in componentWillUnmount", el);
  }

  render() {
    return (
      <div className='chart-div'></div>
    );
  }
}

Chart.propTypes = {
    data: React.PropTypes.array,
    title: React.PropTypes.string
};

export default Chart;