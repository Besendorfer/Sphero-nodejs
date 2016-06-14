'use strict';

const ROSLIB = require('roslib');
const ColorType = require('./../../RosType/Messages/Color.js');

class Color extends ROSLIB.Topic {
	constructor(ros, queueSize = 1) {
		super({
			ros: ros,
			name: Color.topicName,
			messageType: ColorType.messageType,
			queue_size: queueSize
		});
	}

	publish(r, g, b) {
		let valueMessage = new ColorType(r, g, b, 0);
		super.publish(valueMessage);
	}
}

Color.topicName = 'set_color';

module.exports = Color;
