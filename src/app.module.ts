import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { StudentsModule } from './students/students.module';
import { config } from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';

config();

@Module({
    imports: [
        StudentsModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: ['./**/*.graphql'],
            installSubscriptionHandlers: true,
        }),
        MongooseModule.forRootAsync({
            useFactory: async () => ({
                uri: process.env.MONGO_URI
            })
        }),
    ],
})

export class AppModule { }
