import { Injectable } from '@nestjs/common';
import { Student } from '../graphql';

@Injectable()
export class StudentsService {
    private readonly students: Student[] = [
        {
            name: 'Бабій Ігор Володимирович',
            username: 'young_15',
            specialization: 'Кібербезпека',
            group: 'КБ-91'
        },
        {
            name: 'Бова Нікіта Сергійович',
            username: 'nikwin12',
            specialization: 'Електротехнічні системи електроспоживання',
            group: 'ЕТ-91'
        },
        {
            name: 'Бовкун Дмитро Олексійович',
            username: 'Dmitry_Bovkun',
            specialization: 'Кібербезпека',
            group: 'КБ-91'
        },
        {
            name: 'Бугаєц Павло Ігорович',
            username: 'Pavlo_Bugaets',
            specialization: 'Комп`ютеризовані системи управління та робототехніка',
            group: 'СУ-91'
        },
        {
            name: 'Васильченко Микола Анатолійович',
            username: 'Poochie',
            specialization: 'Наука про дані та моделювання складних систем',
            group: 'ПМ.м-01'
        },
        {
            name: 'Демченко Катерина Романівна',
            username: 'katerina_kd',
            specialization: 'Прикладна математика',
            group: 'ПМ-91'
        },
        {
            name: 'Квітницький Роман Олександрович',
            username: 'roman_kv',
            specialization: 'Кібербезпека',
            group: 'КБ-91'
        },
        {
            name: 'Кіхтенко Дмитро Євгенійович',
            username: 'dima_kihtenko',
            specialization: 'Кібербезпека',
            group: 'КБ-91'
        },
    ];

    create = (student: Student) => {
        student.id = this.students.length++;
        this.students.push(student);
        return student;
    };

    findAll = () => this.students;

    findOneById = (id: number) => this.students.find(student => student.id === id);
}
