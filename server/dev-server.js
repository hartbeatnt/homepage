// const env = require('dotenv');
const spawn = require('child_process').spawn;

const nodemon = process.platform === 'win32'
  ? 'node_modules\\.bin\\nodemon.cmd' 
  : 'nodemon';
const wds = process.platform === 'win32'
  ? 'node_modules\\.bin\\webpack-dev-server.cmd' 
  : './node_modules/webpack-dev-server/bin/webpack-dev-server.js';

// env.config({path: "serev/config/.env"});
// env.load();

let spawnedProcesses = [
	  [wds, ['--port', 8081, '--colors', '--host', '0.0.0.0', '--config', 'client/config/webpack.config.js', '--mode', 'development']],
	  [nodemon, ['--ignore', 'public/', '--ignore', 'client/', '--ignore', 'dist/', 'server/server.js', '--port', 8080]],
];

spawnedProcesses.forEach((args) => {
	  const child = spawn.apply(spawn, args).on('error', err => { throw err;  });
	  child.stdout.on('data', data => process.stdout.write(data+''));
	  child.stderr.on('data', data => process.stdout.write(data+''));
});