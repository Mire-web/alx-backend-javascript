const fs = require('fs');

function countStudents(path){
	try {
		const data = fs.readFileSync(path, 'utf8');
		const table = data.split('\n')
		const headers = table[0].split(',')
		const body = table.slice(1).map((line) => {
			const row = line.split(',');
			return headers.reduce((obj, header, index) => {
				obj[header.trim()] = row[index].trim();
				return obj;
			}, {});
		});
		console.log("Number of students: " + body.length)
		csList = body.filter(student => student.field === 'CS').map((student) => student.firstname)
		strForm = csList.join(', ')
		console.log("Number of students in CS: " + csList.length + '. List: ' + strForm)
		sweList = body.filter(student => student.field === 'SWE').map((student) => student.firstname)
		strForm = sweList.join(', ')
		console.log("Number of students in SWE: " + sweList.length + '. List: ' + strForm)
	} catch (err){
		throw new Error('Cannot load the database')
	}
}

module.exports = countStudents;