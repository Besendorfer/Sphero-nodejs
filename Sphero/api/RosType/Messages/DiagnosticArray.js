'use strict';

const ROSLIB = require('roslib');
const Header = require('./Header.js');

class DiagnosticArray extends ROSLIB.Message {
	constructor(status = [], header = new Header()) {
		super({
			header: header,
			status: status
		});
	}
}

DiagnosticArray.from = function from(diagArrPojo) {
	let diagArr = Object.create(DiagnosticArray);
	Object.getPrototypeOf(DiagnosticArray).call(diagArr, diagArrPojo);
	return diagArr;
};

DiagnosticArray.messageType = 'diagnostic_msgs/DiagnosticArray';

module.exports = DiagnosticArray;
