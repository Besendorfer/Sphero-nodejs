'use strict';

const ROSLIB = require('roslib');

class DiagnosticStatus extends ROSLIB.Message {
	constructor(level = 0, name = '', message = '', hardwareId = '', values = []) {
		super({
			level: level & 0x03,
			name: '' + name,
			message: '' + message,
			hardware_id: '' + hardwareId,
			values: values
		});
	}
}

DiagnosticStatus.messageType = 'diagnostic_msgs/DiagnosticStatus';
DiagnosticStatus.OK = 0;
DiagnosticStatus.WARN = 1;
DiagnosticStatus.ERROR = 2;
DiagnosticStatus.STALE = 3;

module.exports = DiagnosticStatus;
