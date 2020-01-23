const logger = require('./logger');
const path = require('path');
const os = require('os');

//use shitty logger
logger.log("Filename: ");

var pathObj = path.parse(__filename);
console.log(pathObj);
const totmem = os.totalmem();
const freemem = os.freemem();
console.log(`Total Memory: ${totmem}\n`, `Free Memory: ${freemem}`);

const Logger = require('./LoggerClass');
const log = new Logger();
//use class based logger and register a listener
log.on('messageLogged', (eventArg)=>{
	console.log('LOG generated...', eventArg);
});
log.log('object from LoggerClass used...');