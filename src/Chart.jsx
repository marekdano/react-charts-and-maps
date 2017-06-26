
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import chart from './chart.js';
import * as _ from 'lodash';

class Chart extends Component {

  componentDidMount() {
    let el = ReactDOM.findDOMNode(this);
		console.log("el in componentDidMount", el);

		chart.create(el, {
			width: 960,
			height: 500
		}, this.getChartState());
  }

  componentDidUpdate() {
    chart.update(this.getChartState());
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
    chart.destroy(el);
  }

  render() {
    return (
      <div className='chart'></div>
    );
  }
}

Chart.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string
};

export default Chart;