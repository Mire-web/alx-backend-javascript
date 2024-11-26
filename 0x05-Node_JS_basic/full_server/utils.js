const { readFile } = require('fs');

function readDatabase(fileName){
	return new Promise((resolve, reject) => {
		readFile(fileName, (err, data) => {
			if (err){
				reject(err);
			} else {
				const result = {};
				const db = data.toString().split('\n');
				const headers = db.slice(1);
				for (let i = 0; i < headers.length; i++){
					if (headers[i]) {
						const field = headers[i].toString().split(',');
						if (Object.prototype.hasOwnProperty.call(result, field[3])) {
							result[field[3]].push(field[0]);
						} else {
							result[field[3]] = [field[0]];
						}
					}
				}
				resolve(result);
			}
		});
	});
}