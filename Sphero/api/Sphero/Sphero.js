'use strict';

// publishers
const Backled       = require('./Topics/Backled.js');
const Color         = require('./Topics/Color.js');
const Heading       = require('./Topics/Heading.js');
const RotationRate  = require('./Topics/RotationRate.js');
const Stabilization = require('./Topics/Stabilization.js');
const Turn          = require('./Topics/Turn.js');
const Velocity      = require('./Topics/Velocity.js');

// subscribers
const Battery   = require('./Topics/Battery.js');
const Collision = require('./Topics/Collision.js');
const Inertia   = require('./Topics/Inertia.js');
const Odometer  = require('./Topics/Odometer.js');

class Sphero {}
Sphero.Backled = Backled;
Sphero.Color = Color;
Sphero.Heading = Heading;
Sphero.RotationRate = RotationRate;
Sphero.Stabilization = Stabilization;
Sphero.Turn = Turn;
Sphero.Velocity = Velocity;

Sphero.Battery = Battery;
Sphero.Collision = Collision;
Sphero.Inertia = Inertia;
Sphero.Odometer = Odometer;

module.exports = Sphero;
