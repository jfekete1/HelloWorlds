const http = require('http');
const obj = [1,2,3];

const server = http.createServer((req,res)=>{
	if(req.url === '/'){
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.write("404 Page not found motherfucker !!");
		res.end();
	}
	if(req.url === '/api/courses'){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify(obj));
		res.end();
	}
});

server.listen(3000);

console.log('Listening on port 3000...');