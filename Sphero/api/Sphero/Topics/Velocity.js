'use strict';

const ROSLIB = require('roslib');
const TwistType = require('./../../RosType/Messages/Twist.js');

class Velocity extends ROSLIB.Topic {
	constructor(ros, queueSize = 1) {
		super({
			ros: ros,
			name: Velocity.topicName,
			messageType: TwistType.messageType,
			queue_size: queueSize
		});
	}

	publish(x, y) {
		let valueMessage = new TwistType(x, y);
		super.publish(valueMessage);
	}
}

Velocity.topicName = 'cmd_vel';

module.exports = Velocity;
