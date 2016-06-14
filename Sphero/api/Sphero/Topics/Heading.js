'use strict';

const ROSLIB = require('roslib');
const Float32Type = require('./../../RosType/Messages/Float32.js');
const Turn = require('./Turn.js');

class Heading extends ROSLIB.Topic {
	constructor(ros, queueSize = 1) {
		super({
			ros: ros,
			name: Heading.topicName,
			messageType: Float32Type.messageType,
			queue_size: queueSize
		});

		this.turn = new Turn(ros);
	}

	publish(value) {
		this.turn.publish(value);
		let valueMessage = new Float32Type(0);
		super.publish(valueMessage);
	}
}

Heading.topicName = 'set_heading';

module.exports = Heading;
