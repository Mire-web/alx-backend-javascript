export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: unknown;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (fName: string, lName: string) => {
  return `${fName.slice(0, 1)}. ${lName}`;
}

export interface StudentConstructor{
  new(_firstName: string, _lastName: string): StudentClassInstance;
}

export interface StudentClassInstance {
  _firstName: string;
  _lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInstance {
  _firstName: string;
  _lastName: string;
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this._firstName;
  }
}
