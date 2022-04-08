import { CreateStudentInput } from '../../graphql';

export class CreateStudentDto implements CreateStudentInput {
    name: string;
    specialization: string;
    group: string;

    constructor(name: string, specialization: string, group: string) {
        this.name = name;
        this.specialization = specialization;
        this.group = group;
    }
}
