'use strict';

// services
const Info    = require('./Services/Info.js');
const Intrude = require('./Services/Intrude.js');

class Apriltag {}
Apriltag.Info    = Info;
Apriltag.Intrude = Intrude;

module.exports = Apriltag;
