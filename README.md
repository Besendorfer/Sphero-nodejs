# Sphero with Node.js
In order to use this, a Rosbridge installation is necessary. If using Ubuntu, follow the instructions found [here](http://wiki.ros.org/ROS/Installation). If you are using a different operation system, we'll find a tutorial (or make one) as soon as possible.
**Note**: We were using Ubuntu 14.04, so we had to install the *jade* distribution.

Also, it is necessary to have Node.js installed. We are using code which requires version >= 6.1. We found it is easiest to get >= 6.1 with *nvm*. An installation guide can be found [here](https://github.com/creationix/nvm).
After installing Node.js, run `npm install`. This will download and install the required dependency, *roslib*.

Once everything is set up, all that is necessary is to run rosbridge with `roslaunch rosbridge_server rosbridge_websocket.launch`, and then run your code with `node server.js`.
