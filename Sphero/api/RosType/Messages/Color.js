'use strict';

const ROSLIB = require('roslib');
const Float32 = require('./Float32');

class Color extends ROSLIB.Message {
	constructor(r = 0, g = 0, b = 0, a = 0) {
		super({
			r: r & 0xff,
			g: g & 0xff,
			b: b & 0xff,
			a: a & 0xff
		});
	}
}

Color.messageType = 'std_msgs/ColorRGBA';

module.exports = Color;
