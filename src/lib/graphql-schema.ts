
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateStudentInput {
    name: string;
    specialization: string;
    group: string;
}

export class FetchDate {
    hours?: Nullable<number>;
    minutes?: Nullable<number>;
    seconds?: Nullable<number>;
}

export abstract class IQuery {
    abstract getDate(): FetchDate | Promise<FetchDate>;

    abstract getStudentById(id: number): Student | Promise<Student>;

    abstract getStudentByUsername(username: string): Student | Promise<Student>;

    abstract totalStudents(): number | Promise<number>;

    abstract allStudents(): Student[] | Promise<Student[]>;
}

export class Student {
    id?: Nullable<number>;
    username?: Nullable<string>;
    name: string;
    problems?: Nullable<number>;
    solves?: Nullable<number>;
    location?: Nullable<Location>;
    avatar?: Nullable<string>;
    specialization: string;
    group: string;
}

export abstract class IMutation {
    abstract createStudent(createStudentInput?: Nullable<CreateStudentInput>): Nullable<Student> | Promise<Nullable<Student>>;
}

export abstract class ISubscription {
    abstract studentCreated(): Nullable<Student> | Promise<Nullable<Student>>;
}

export class Location {
    country?: Nullable<string>;
    city?: Nullable<string>;
}

type Nullable<T> = T | null;
