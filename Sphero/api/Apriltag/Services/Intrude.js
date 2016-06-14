'use strict';

const ROSLIB = require('roslib');

class Intrude extends ROSLIB.Service {
	constructor(ros) {
		super({
			ros: ros,
			name: Intrude.serviceName,
			serviceType: Intrude.serviceType
		});
	}
}

Intrude.serviceName = 'apriltags_intrude';
Intrude.serviceType = 'apriltags_intrude_detector/apriltags_intrude';

module.exports = Intrude;
