'use strict';

const ROSLIB = require('roslib');
const InertiaType = require('./../../RosType/Messages/Inertia.js');

class Inertia extends ROSLIB.Topic {
	constructor(ros, queueSize = 1) {
		super({
			ros: ros,
			name: Inertia.topicName,
			messageType: InertiaType.messageType,
			queue_size: queueSize
		});
	}
}

Inertia.topicName = 'imu';

module.exports = Inertia;
