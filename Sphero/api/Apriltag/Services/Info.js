'use strict';

const ROSLIB = require('roslib');

class Info extends ROSLIB.Service {
	constructor(ros) {
		super({
			ros: ros,
			name: Info.serviceName,
			serviceType: Info.serviceType
		});
	}
}

Info.serviceName = 'apriltags_info';
Info.serviceType = 'apriltags_intrude_detector/apriltags_info';

module.exports = Info;
