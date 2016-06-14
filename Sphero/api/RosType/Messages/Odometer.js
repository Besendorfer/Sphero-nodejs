'use strict';

const ROSLIB = require('roslib');

class Odometer extends ROSLIB.Message {
	constructor(data) {
		super(data);
	}
}

Odometer.messageType = 'nav_msgs/Odometry';

module.exports = Odometer;
