
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateStudentInput {
    name: string;
    specialization: string;
    group: string;
}

export interface IQuery {
    student(username: string): Student | Promise<Student>;
    totalStudents(): number | Promise<number>;
    allStudents(): Student[] | Promise<Student[]>;
    getDate(): FetchDate | Promise<FetchDate>;
}

export interface IMutation {
    createStudent(createStudentInput?: Nullable<CreateStudentInput>): Nullable<Student> | Promise<Nullable<Student>>;
}

export interface ISubscription {
    studentCreated(): Nullable<Student> | Promise<Nullable<Student>>;
}

export interface Student {
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

export interface Location {
    country?: Nullable<string>;
    city?: Nullable<string>;
}

export interface FetchDate {
    hours?: Nullable<number>;
    minutes?: Nullable<number>;
    seconds?: Nullable<number>;
}

type Nullable<T> = T | null;
