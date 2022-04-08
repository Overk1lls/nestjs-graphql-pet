import { Module } from '@nestjs/common';
import { StudentsResolver } from './students.resolver';
import { StudentsService } from './students.service';

@Module({
    providers: [StudentsService, StudentsResolver]
})

export class StudentsModule { }
