'use strict';

const ROSLIB = require('roslib');
const BoolType = require('./../../RosType/Messages/Bool.js');

class Stabilization extends ROSLIB.Topic {
	constructor(ros, queueSize = 1) {
		super({
			ros: ros,
			name: Stabilization.topicName,
			messageType: BoolType.messageType,
			queue_size: queueSize
		});
	}

	publish(value) {
		let valueMessage = new BoolType(!value);
		super.publish(valueMessage);
	}
}

Stabilization.topicName = 'disable_stabilization';

module.exports = Stabilization;
