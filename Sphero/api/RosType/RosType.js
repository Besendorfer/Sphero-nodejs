'use strict';

const Battery          = require('./Messages/Battery.js');
const Bool             = require('./Messages/Bool.js');
const Collision        = require('./Messages/Collision.js');
const Color            = require('./Messages/Color.js');
const DiagnosticArray  = require('./Messages/DiagnosticArray.js');
const DiagnosticStatus = require('./Messages/DiagnosticStatus.js');
const Float32          = require('./Messages/Float32.js');
const Inertia          = require('./Messages/Inertia.js');
const KeyValue         = require('./Messages/KeyValue.js');
const Odometer         = require('./Messages/Odometer.js');
const Point32          = require('./Messages/Point32.js');
const Pose2D           = require('./Messages/Pose2D.js');
const Twist            = require('./Messages/Twist.js');

class RosType {}
RosType.Battery          = Battery;
RosType.Bool             = Bool;
RosType.Collision        = Collision;
RosType.Color            = Color;
RosType.DiagnosticArray  = DiagnosticArray;
RosType.DiagnosticStatus = DiagnosticStatus;
RosType.Float32          = Float32;
RosType.Inertia          = Inertia;
RosType.KeyValue         = KeyValue;
RosType.Odometer         = Odometer;
RosType.Point32          = Point32;
RosType.Pose2D           = Pose2D;
RosType.Twist            = Twist;

module.exports = RosType;
