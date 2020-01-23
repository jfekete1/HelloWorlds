var url = 'http://mylogger.io/log';
const EventEmitter = require('events');
const emitter = new EventEmitter();

//register a listener
emitter.on('messageLogged', (eventArg)=>{
	console.log('LOG generated for Listener call.', eventArg);
});

function log(message){
	console.log(message);
	//Raise an event
	emitter.emit('messageLogged', { id: 1, url: 'https://e-servant.com'});
}

module.exports.log = log;