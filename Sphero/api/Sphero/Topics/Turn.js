'use strict';

const ROSLIB = require('roslib');
const Float32Type = require('./../../RosType/Messages/Float32.js');

class Turn extends ROSLIB.Topic {
	constructor(ros, queueSize = 1) {
		super({
			ros: ros,
			name: Turn.topicName,
			messageType: Float32Type.messageType,
			queue_size: queueSize
		});
	}

	publish(value) {
		value = value % (360);
		if (value < 0) value += 360;
		let valueMessage = new Float32Type(value);
		super.publish(valueMessage);
	}
}

Turn.topicName = 'cmd_turn';

module.exports = Turn;
