'use strict';

const ROSLIB = require('roslib');
const BatteryType = require('./../../RosType/Messages/Battery.js');
const DiagnosticArrayType = require('./../../RosType/Messages/DiagnosticArray.js');

class Battery extends ROSLIB.Topic {
	constructor(ros, throttleRate = 0, queueSize = 1) {
		super({
			ros: ros,
			name: Battery.topicName,
			messageType: DiagnosticArrayType.messageType,
			queue_size: queueSize,
			throttle_rate: throttleRate
		});
	}

	subscribe(cb) {
		return super.subscribe((data) => {
			cb(new BatteryType(DiagnosticArrayType.from(data)));
		});
	}
}

Battery.topicName = 'diagnostics';

module.exports = Battery;
