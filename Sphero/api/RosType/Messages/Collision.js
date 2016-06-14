'use strict';

const ROSLIB = require('roslib');

class Collision extends ROSLIB.Message {
	constructor(data) {
		super(data);
	}
}

Collision.messageType = 'sphero_node/SpheroCollision';

module.exports = Collision;
