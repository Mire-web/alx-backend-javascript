namespace Subjects {
    export interface TeacherInterface {
            experienceTeachingJava?: number;
	        }

    export class Java extends Subject {
            getRequirements(): string {
	                return 'Here is the list of requirements for Java';
			        }
				        getAvailableTeacher(): string {
					            if (this.teacher.experienceTeachingJava > 0) {
						                    return `Available Teacher: ${this.teacher.firstName}`;
								                } else {
										                return 'No available teacher';
												            }
													            }
														        }
															}