import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorCode, ServerError } from '../errors/server-error';
import { Student } from '../lib/graphql-schema';
import { Model, Types } from 'mongoose';
import { StudentDocument } from './document/students.document';
import { createFakeUsers } from '../lib/utils';

@Injectable()
export class StudentsService {
    constructor(
        @InjectModel(Student.name) private readonly studentModel: Model<StudentDocument>
    ) { }

    create = async (student: Student) => {
        const userExists = await this.studentModel.findOne({ name: student.name });
        if (userExists) {
            throw new ServerError(
                ErrorCode.INVALID_REQUEST,
                'User already exists'
            );
        }
        student = {
            ...student,
            id: (await this.totalStudents()) + 1,
            avatar: (await createFakeUsers(1))[0].avatar,
        };

        await this.studentModel.create({
            ...student,
            _id: new Types.ObjectId()
        });

        return student;
    };

    totalStudents = async () => await this.studentModel.find({}).estimatedDocumentCount();

    findAll = async () => {
        const students = await this.studentModel.find({});
        if (!students.length) {
            throw new ServerError(ErrorCode.NOT_FOUND);
        }
        return students;
    };

    findOneById = async (id: number) => {
        const user = await this.studentModel.findOne({ id });
        if (!user) {
            throw new ServerError(ErrorCode.NOT_FOUND);
        }
        return user;
    };

    findOneByUsername = async (username: string) => {
        const user = await this.studentModel.findOne({ username });
        if (!user) {
            throw new ServerError(ErrorCode.NOT_FOUND);
        }
        return user;
    };
}
