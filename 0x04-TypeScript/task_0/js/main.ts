interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Blacq";
  lastName: "Nwangele";
  age: 21;
  location: "Nigeria";
};

const student2: Student = {
  firstName: "Mirey";
  lastName: "Dev";
  age: 23;
  location: "Nigeria";
};

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.createElement("body");
const table: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = document.createElement("thead");
const tableBody: HTMLTableSectionElement = document.createElement("tbody");
const headRow: HTMLTableRowElement = tableHead.insertRow();
const headCell1: HTMLTableCellElement = headRow.insertCell();
const headCell2: HTMLTableCellElement = headRow.insertCell();

headCell1.innerHTML = "Firstname";
headCell2.innerHTML = "Location";
table.appendChild(tableHead);

studentsList.forEach((student) => {
const row: HTMLTableRowElement = tableBody.insertRow();
const cell1: HTMLTableCellElement = row.insertCell();
const cell2: HTMLTableCellElement = row.insertCell();

cell1.innerHTML = student.firstName;
cell2.innerHTMl = student.location;
})

table.appendChild(tableBody);
body.appendChild(table);
