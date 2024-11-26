const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');
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
    console.log(`Number of students: ${l}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
// const fs = require('fs');

// function countStudents(path){
// 	try {
// 		const data = fs.readFileSync(path, 'utf8');
// 		const table = data.split('\n')
// 		const headers = table[0].split(',')
// 		const body = table.slice(1).map((line) => {
// 			const row = line.split(',');
// 			return headers.reduce((obj, header, index) => {
// 				obj[header.trim()] = row[index].trim();
// 				return obj;
// 			}, {});
// 		});
// 		console.log("Number of students: " + body.length)
// 		csList = body.filter(student => student.field === 'CS').map((student) => student.firstname)
// 		strForm = csList.join(', ')
// 		console.log("Number of students in CS: " + csList.length + '. List: ' + strForm)
// 		sweList = body.filter(student => student.field === 'SWE').map((student) => student.firstname)
// 		strForm = sweList.join(', ')
// 		console.log("Number of students in SWE: " + sweList.length + '. List: ' + strForm)
// 	} catch (err){
// 		throw new Error('Cannot load the database')
// 	}
// }

// module.exports = countStudents;