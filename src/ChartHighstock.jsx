
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Highcharts from 'highcharts/highstock';

class ChartHighstock extends Component {
	
	componentDidMount() {
		this.createChart();
	}

	componentDidUpdate() {
    this.createChart();
  }

	createChart() {
		let formatData = [];
		formatData = this.props.data.map(obj => {
			const date = obj['Date'].split("/");
			const dateInSeconds = new Date(`20${date[2]}`, +date[1] - 1, date[0]).getTime();
			return [dateInSeconds, obj['Close']];
		}).reverse();

		console.log("Data formatted", formatData);

		Highcharts.stockChart('chart', {
        rangeSelector: {
        	selected: 1
        },

        title: {
          text: this.props.title
        },
				
        series: [{
            name: '',
            data: formatData,
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