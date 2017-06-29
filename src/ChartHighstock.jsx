
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
//import highstock from './highstock.js';
import * as Highcharts from 'highcharts/highstock';
import aapl from './data/aapl';
import * as _ from 'lodash';


class ChartHighstock extends Component {
	
	componentDidMount() {
		this.createChart();
	}

	createChart() {
		console.log("Highcharts", Highcharts);
		let data = [];
		Highcharts.stockChart('chart', {
        rangeSelector: {
        	selected: 1
        },

        title: {
          text: this.props.title
        },
				turboThreshold: 1000000,
        series: [{
            name: 'AAPL',
            data: aapl,
            tooltip: {
              valueDecimals: 2
            }
        }]
    });
	}

	render() {
		return (
			<div id='chart'>Highstock</div>
		);
	}
}

ChartHighstock.propTypes = {
	data: PropTypes.array,
  title: PropTypes.string
};

export default ChartHighstock;