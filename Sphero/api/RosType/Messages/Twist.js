'use strict';

const ROSLIB = require('roslib');

class Twist extends ROSLIB.Message {
	constructor(x = 0, y = 0, z = 0, ax = 0, ay = 0, az = 0) {
		super({
			linear: {
				x: x,
				y: y,
				z: z
			},
			angular: {
				x: ax,
				y: ay,
				z: az
			}
		});
	}
}

Twist.from = function from(twistPojo) {
	let twist = Object.create(Twist);
	Object.getPrototypeOf(Twist).call(twist, twistPojo);
	return twist;
};

Twist.messageType = 'geometry_msgs/Twist';

module.exports = Twist;
