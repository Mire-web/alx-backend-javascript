const http = require('http')

const PORT = 1245
const app = http.createServer((req, res) => {
	res.statusCode = 200;
	res.end('Hello Holberton School!')
})

app.listen(PORT, '127.0.0.1', () => {})
