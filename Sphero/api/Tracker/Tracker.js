'use strict';

// subscribers
const Target  = require('./Topics/Target.js');
const Tracked = require('./Topics/Tracked.js');

class Tracker {}
Tracker.Target  = Target;
Tracker.Tracked = Tracked;

module.exports = Tracker;
