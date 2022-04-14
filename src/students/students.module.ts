import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student } from '../lib/graphql-schema';
import { StudentSchema } from './document/students.document';
import { StudentsResolver } from './students.resolver';
import { StudentsService } from './students.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }])],
    providers: [StudentsService, StudentsResolver]
})

export class StudentsModule { }
