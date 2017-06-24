
import * as d3 from 'd3';

let chart = {};

chart.create = (el, props, state) => {

	console.log("el in create chart", el);
	console.log("State in create chart", state);

	d3.select(el)
	 .selectAll('p')
		.data(state.data)
		.enter()
		.append('p')
		.text(function(d) {
			return `${d.Date} was closed with ${d.Close}`;
		});
}

export default chart;