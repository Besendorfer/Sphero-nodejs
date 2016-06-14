'use strict';

const ROSLIB = require('roslib');

const dround = (function droundFactory(arr) {
	return function dround(x) { return arr[0] = x, arr[0]; };
})(new Float64Array(1));

class Pose2D extends ROSLIB.Message {
	constructor(x = 0, y = 0, theta = 0) {
		super({
			x: dround(x),
			y: dround(y),
			theta: dround(theta)
		});
	}
}

Pose2D.messageType = 'geometry_msgs/Pose2D';

module.exports = Pose2D;
