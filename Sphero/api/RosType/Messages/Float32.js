'use strict';

const ROSLIB = require('roslib');

class Float32 extends ROSLIB.Message {
	constructor(data) {
		super({
			data: Math.fround(data)
		});
	}
}

Float32.messageType = 'std_msgs/Float32';

module.exports = Float32;
