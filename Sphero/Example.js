'use strict';

const FS = require('fs');
const Sphero = require('./api/Sphero/Sphero.js');
const Tracker = require('./api/Tracker/Tracker.js');
const ROSLIB = require('roslib');

class Example {
	constructor(url = 'ws://localhost:9090') {
		this.ros = new ROSLIB.Ros({
			url: url,
			encoding: 'ascii'
		});

		this.backled = new Sphero.Backled(this.ros);
		this.color = new Sphero.Color(this.ros);
		this.battery = new Sphero.Battery(this.ros, 30000);
		this.velocity = new Sphero.Velocity(this.ros);

		this.tracking = new Tracker.Tracked(this.ros);

		this.enableMovement = true;

		// An example of the watcher. This file isn't actually included in this repository,
		// It is here just to show how it works.
		// const PID = require('./PID.js');
		// this.pid = new PID();
	}

	serve() {
		this.process();
		// this.watchFile('PID');
		this.subscribeBattery();
	}

	process() {
		// This will be called every time the Sphero publishes a "tracking" command.
		// This happens very frequently.
		this.tracking.subscribe((pose2D) => {
			if (!this.enableMovement || pose2D.x === -1 || pose2D.y === -1) {
				return;
			}

			// This is typically where velocity calculations go.

			// This is where cmd_vel is published.
			this.velocity.publish(/* some x value */, /* some y value */);
		});
	}

	// Allows us to make changes to specified files without needing to restart the server.
	watchFile(module) {
		let ModuleFile = require.resolve('./' + module + '.js');
		FS.watchFile(ModuleFile, () => {
			console.warn('reloading ' + module + '!');
			delete require.cache[ModuleFile];
			const Module = require(ModuleFile);
			this[module.toLowerCase()] = new Module();
		});
	}

	// Gives battery information.
	subscribeBattery() {
		this.battery.subscribe((battery) => {
			let message = battery.status;
			message += ' (' + (battery.voltage / 100) + 'V';
			message += ', ' + battery.numCharges + ' times charged';
			message += ', ' + battery.timeSinceCharge + 's since charge)';
			console.log(message);

			this.enableMovement = battery.status !== 'Battery Charging' &&
				battery.timeSinceCharge > 3;
			if (this.enableMovement) {
				this.color.publish(0, 255, 0);
				this.backled.publish(0xff);
			} else {
				this.color.publish(0, 255, 0);
				this.color.publish(0, 0, 0);
				this.backled.publish(0x00);
			}
		});
	}
}

module.exports = Example;
