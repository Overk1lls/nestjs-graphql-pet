import { Module} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { StudentsModule } from './students/students.module';
import { config } from 'dotenv';

config();

@Module({
    imports: [
        StudentsModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: ['./**/*.graphql'],
            installSubscriptionHandlers: true,
        }),
    ],
})

export class AppModule { }
