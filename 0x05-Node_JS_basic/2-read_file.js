const fs = require('fs');


module.exports = function countStudents(path){
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
		process.stdout.write("Number of students: " + body.length + "\n")
		csList = body.filter(student => student.field === 'CS').map((student) => student.firstname)
		strForm = csList.join(', ')
		process.stdout.write("Number of students in CS: " + csList.length + '. List: ' + strForm + '\n')
		sweList = body.filter(student => student.field === 'SWE').map((student) => student.firstname)
		strForm = sweList.join(', ')
		process.stdout.write("Number of students in SWE: " + sweList.length + '. List: ' + strForm + '\n')
	} catch (err){
		throw new Error('Cannot load the database')
	}
}
