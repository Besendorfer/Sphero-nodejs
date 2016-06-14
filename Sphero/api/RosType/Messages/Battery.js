'use strict';

const ROSLIB = require('roslib');

class Battery extends ROSLIB.Message {
	constructor(diagnosticArray = {status:[{values:[]}]}) {
		let battery = {
			status: diagnosticArray.status[0].message
		};
		for (let pair of diagnosticArray.status[0].values) {
			battery[pair.key] = pair.value;
		}

		super(battery);
	}
}

Battery.messageType = 'Error: Not a published type!';

module.exports = Battery;
