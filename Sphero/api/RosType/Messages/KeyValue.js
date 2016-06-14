'use strict';

const ROSLIB = require('roslib');

class KeyValue extends ROSLIB.Message {
	constructor(key = '', value = '') {
		super({
			key: key,
			value: value
		});
	}
}

KeyValue.messageType = 'diagnostic_msgs/KeyValue';

module.exports = KeyValue;
