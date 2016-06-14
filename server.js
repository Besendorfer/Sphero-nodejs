'use strict';

const Sphero = require('./Sphero/Example.js');

try {
	let sphero = new Sphero();
	sphero.serve();

} catch (e) {
	console.error(e);
}
