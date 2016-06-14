'use strict';

const ROSLIB = require('roslib');

class Point32 extends ROSLIB.Message {
	constructor(data) {
		super(data);
	}
}

Point32.messageType = 'geometry_msgs/Point32';

module.exports = Point32;
