import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorCode, ServerError } from '../errors/server-error';
import { Student } from '../lib/graphql-schema';
import { Model } from 'mongoose';
import { StudentDocument } from './document/students.document';

@Injectable()
export class StudentsService {
    private readonly students: Student[] = [
        {
            id: 1,
            name: 'Бабій Ігор Володимирович',
            username: 'young_15',
            specialization: 'Кібербезпека',
            group: 'КБ-91'
        },
        {
            id: 2,
            name: 'Бова Нікіта Сергійович',
            username: 'nikwin12',
            specialization: 'Електротехнічні системи електроспоживання',
            group: 'ЕТ-91'
        },
        {
            id: 3,
            name: 'Бовкун Дмитро Олексійович',
            username: 'Dmitry_Bovkun',
            specialization: 'Кібербезпека',
            group: 'КБ-91'
        },
        {
            id: 4,
            name: 'Бугаєц Павло Ігорович',
            username: 'Pavlo_Bugaets',
            specialization: 'Комп`ютеризовані системи управління та робототехніка',
            group: 'СУ-91'
        },
        {
            id: 5,
            name: 'Васильченко Микола Анатолійович',
            username: 'Poochie',
            specialization: 'Наука про дані та моделювання складних систем',
            group: 'ПМ.м-01'
        },
        {
            id: 6,
            name: 'Демченко Катерина Романівна',
            username: 'katerina_kd',
            specialization: 'Прикладна математика',
            group: 'ПМ-91'
        },
        {
            id: 7,
            name: 'Квітницький Роман Олександрович',
            username: 'roman_kv',
            specialization: 'Кібербезпека',
            group: 'КБ-91'
        },
        {
            id: 8,
            name: 'Кіхтенко Дмитро Євгенійович',
            username: 'dima_kihtenko',
            specialization: 'Кібербезпека',
            group: 'КБ-91'
        },
    ];

    constructor(@InjectModel(Student.name) private readonly studentModel: Model<StudentDocument>) { }

    create = async (student: Student) => {
        const userExists = await this.studentModel.findOne({ name: student.name });
        if (userExists) {
            throw new ServerError(
                ErrorCode.INVALID_REQUEST,
                'User already exists'
            );
        }
        student.id = this.students.length + 1;
        await this.studentModel.create(student);

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
