
const os = require('os');
const execSync = require('child_process').execSync;
const machine_hardware = execSync('uname -m').toString().trim();

const relativePath = `usr/lib/${machine_hardware}-linux-gnu/gstreamer-1.0/`;
process.env.GST_PLUGIN_PATH = [
    `/${relativePath}`,
    `${os.homedir()}/.transitive/${relativePath}`
  ].join(':');

console.log('using GST_PLUGIN_PATH', process.env.GST_PLUGIN_PATH);
module.exports = require('./build/Release/gstreamer-superficial');
