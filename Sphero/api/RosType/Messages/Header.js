'use strict';

const ROSLIB = require('roslib');

class Header extends ROSLIB.Message {
	constructor(seq = -1, stamp = Date.now(), frame = 0) {
		super({
			seq: seq >>> 0,
			stamp: {
				sec: (stamp / 1000) >>> 0,
				nsec: (stamp % 1000) * 1000000 >>> 0
			},
			frame: '' + frame
		});
	}
}

Header.from = function from(headerPojo) {
	let header = Object.create(Header);
	Object.getPrototypeOf(Header).call(header, headerPojo);
	return header;
};

Header.messageType = 'std_msgs/Header';

module.exports = Header;
