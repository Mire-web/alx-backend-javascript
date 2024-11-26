const http = require('http');
const { readFile } = require('fs');

const host = '127.0.0.1';
const PORT = 1245;


function countStudents(fileName) {
	const students = {};
	const fields = {};
	let length = 0;
	return new Promise((resolve, reject) => {
	  readFile(fileName, (error, data) => {
		if (error) {
		  reject(Error('Cannot load the database'));
		} else {
		  const lines = data.toString().split('\n');
		  for (let i = 0; i < lines.length; i += 1) {
			if (lines[i]) {
			  length += 1;
			  const field = lines[i].toString().split(',');
			  if (Object.prototype.hasOwnProperty.call(students, field[3])) {
				students[field[3]].push(field[0]);
			  } else {
				students[field[3]] = [field[0]];
			  }
			  if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
				fields[field[3]] += 1;
			  } else {
				fields[field[3]] = 1;
			  }
			}
		  }
		  const l = length - 1;
		  output = `Number of students: ${l}`;
		  for (const [key, value] of Object.entries(fields)) {
			if (key !== 'field') {
			  output += '\n';
			  output += `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`;
			}
		  }
		  resolve(output);
		}
	  });
	});
  }

const app = http.createServer(async (req, res) => {
	const {url, method} = req;
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	if(url === '/' && method === 'GET'){
		res.end('Hello Holberton School!')
	} else if(url === '/students' && method === 'GET'){
		res.write('This is the list of our students\n');
		countStudents(process.argv[2].toString()).then((output) => {
			const out = output.slice(0, -1);
			res.end(out);
		}).catch (() => {
			res.statusCode = 404;
			res.end('Cannot load the database');
		});
	}
});

app.listen(PORT, host, () => {
	console.log('listening on 1245');
});
