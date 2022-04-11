import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(4000, async () =>
        console.log(`App is running on ${await app.getUrl()}`)
    );
};

bootstrap();