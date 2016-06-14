'use strict';

const ROSLIB = require('roslib');
const Pose2DType = require('./../../RosType/Messages/Pose2D.js');

class Tracked extends ROSLIB.Topic {
	constructor(ros, queueSize = 1) {
		super({
			ros: ros,
			name: Tracked.topicName,
			messageType: Pose2DType.messageType,
			queue_size: queueSize
		});
	}
}

Tracked.topicName = 'tracked_pos';

module.exports = Tracked;
