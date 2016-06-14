'use strict';

const ROSLIB = require('roslib');
const OdometerType = require('./../../RosType/Messages/Odometer.js');
const TwistType = require('./../../RosType/Messages/Twist');

class Odometer extends ROSLIB.Topic {
	constructor(ros, queueSize = 1) {
		super({
			ros: ros,
			name: Odometer.topicName,
			messageType: OdometerType.messageType,
			queue_size: queueSize
		});
	}

	subscribe(cb) {
		return super.subscribe((data) => {
			cb(TwistType.from(data.twist.twist));
		});
	}
}

Odometer.topicName = 'odom';

module.exports = Odometer;
