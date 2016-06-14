'use strict';

const ROSLIB = require('roslib');
const Float32Type = require('./../../RosType/Messages/Float32.js');

class RotationRate extends ROSLIB.Topic {
	constructor(ros, queueSize = 1) {
		super({
			ros: ros,
			name: RotationRate.topicName,
			messageType: Float32Type.messageType,
			queue_size: queueSize
		});
	}

	publish(value) {
		let valueMessage = new Float32Type(value & 0xff);
		super.publish(valueMessage);
	}
}

RotationRate.topicName = 'set_angular_velocity';

module.exports = RotationRate;
