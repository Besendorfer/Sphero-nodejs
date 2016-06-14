'use strict';

const ROSLIB = require('roslib');
const Pose2DType = require('./../../RosType/Messages/Pose2D.js');

class Target extends ROSLIB.Topic {
	constructor(ros, queueSize = 1) {
		super({
			ros: ros,
			name: Target.topicName,
			messageType: Pose2DType.messageType,
			queue_size: queueSize
		});
	}
}

Target.topicName = 'target_pos';

module.exports = Target;
