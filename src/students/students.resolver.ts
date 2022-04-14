import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { PubSub } from 'graphql-subscriptions';
import { CreateStudentDto } from './dto/create-student.dto';
import { FetchDate } from '../lib/graphql-schema';
import { StudentsGuard } from './students.guard';

const pubSub = new PubSub();

@Resolver('Student')
export class StudentsResolver {
    constructor(private readonly studentsService: StudentsService) { }

    @Query('getStudentById')
    async getStudent(@Args('id', ParseIntPipe) id: number) {
        return this.studentsService.findOneById(id);
    }

    @Query('getStudentByUsername')
    async getStudentByUsername(@Args('username') username: string) {
        return this.studentsService.findOneByUsername(username);
    }

    @Query('totalStudents')
    async getTotalStudents() {
        return this.studentsService.totalStudents();
    }

    @Query('allStudents')
    @UseGuards(StudentsGuard)
    async getStudents() {
        return this.studentsService.findAll();
    }

    @Query('getDate')
    getDate() {
        const fetchDate: FetchDate = {
            hours: 23,
            minutes: 6,
            seconds: 51
        };
        return fetchDate;
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
