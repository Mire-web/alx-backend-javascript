const { readFile } = require('fs');

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
        console.log(`Number of students: ${l}`);
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
// const fs = require('fs');


// module.exports = function countStudents(path) {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(path, 'utf-8', (err, data) => {
// 			if (err) {
// 				reject(new Error('Cannot load database'));
// 				return;
// 			}
// 			try {
// 				const table = data.split('\n')
// 				const headers = table[0].split(',')
// 				const body = table.slice(1).map((line) => {
// 					const row = line.split(',');
// 					return headers.reduce((obj, header, index) => {
// 						obj[header.trim()] = row[index].trim();
// 						return obj;
// 					}, {});
// 				});
// 				process.stdout.write("Number of students: " + body.length + "\n");
// 				csList = body.filter(student => student.field === 'CS').map((student) => student.firstname);
// 				strForm = csList.join(', ');
// 				process.stdout.write("Number of students in CS: " + csList.length + '. List: ' + strForm + '\n');
// 				sweList = body.filter(student => student.field === 'SWE').map((student) => student.firstname);
// 				strForm = sweList.join(', ');
// 				process.stdout.write("Number of students in SWE: " + sweList.length + '. List: ' + strForm + '\n');
// 				resolve();
// 			}
// 			catch (err) {
// 				reject(new Error('Cannot process the database'))
// 			}
// 		});
// 	});
// }
