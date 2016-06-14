'use strict';

const ROSLIB = require('roslib');
const CollisionType = require('./../../RosType/Messages/Collision.js');

class Collision extends ROSLIB.Topic {
	constructor(ros, queueSize = 1) {
		super({
			ros: ros,
			name: Collision.topicName,
			messageType: CollisionType.messageType,
			queue_size: queueSize
		});
	}
}

Collision.topicName = 'collision';

module.exports = Collision;
