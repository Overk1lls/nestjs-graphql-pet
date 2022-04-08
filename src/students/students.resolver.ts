import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';
import { StudentsService } from './students.service';
import { PubSub } from 'graphql-subscriptions';
import { CreateStudentDto } from './dto/create-student.dto';

const pubSub = new PubSub();

@Resolver('Student')
export class StudentsResolver {
    constructor(private readonly studentsService: StudentsService) { }

    @Query('students')
    async getStudents() {
        return this.studentsService.findAll();
    }

    @Query('student')
    async getStudent(@Args('id', ParseIntPipe) id: number) {
        return this.studentsService.findOneById(id);
    }

    @Mutation('createStudent')
    createStudent(@Args('createStudentInput') args: CreateStudentDto) {
        const student = this.studentsService.create(args);
        pubSub.publish('studentCreated', { studentCreated: student });
        return student;
    }

    @Subscription('studentCreated')
    studentCreated() {
        return pubSub.asyncIterator('studentCreated');
    }
}
