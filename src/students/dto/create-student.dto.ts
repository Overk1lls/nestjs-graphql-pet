import { CreateStudentInput } from '../../lib/graphql-schema';

export class CreateStudentDto implements CreateStudentInput {
    id: number;
    name: string;
    specialization: string;
    group: string;

    constructor(id: number, name: string, specialization: string, group: string) {
        this.id = id;
        this.name = name;
        this.specialization = specialization;
        this.group = group;
    }
}
