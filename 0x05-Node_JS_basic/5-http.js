const http = require('http')
const students = require('./3-read_file_async.js')

const host = '127.0.0.1';
const PORT = 1245

const app = http.createServer((req, res) => {
	const {url, method} = req;
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	if(url === '/' && method === 'GET'){
		res.end('Hello Holberton School!')
	} else if(url === '/students' && method === 'GET'){
		res.end(students(process.argv[2]))
	}
})

app.listen(PORT, host, () => {
	console.log('listening on 1245')
})
