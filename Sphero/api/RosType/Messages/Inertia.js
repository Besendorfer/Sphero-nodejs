'use strict';

const ROSLIB = require('roslib');

class Inertia extends ROSLIB.Message {
	constructor(data) {
		super(data);
	}
}

// imu = inertial measurement unit
Inertia.messageType = 'sensor_msgs/Imu';

module.exports = Inertia;
