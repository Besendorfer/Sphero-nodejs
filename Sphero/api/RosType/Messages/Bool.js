'use strict';

const ROSLIB = require('roslib');

class Bool extends ROSLIB.Message {
	constructor(bool = false) {
		super({
			data: !!bool
		});
	}
}

Bool.messageType = 'std_msgs/Bool';

module.exports = Bool;
