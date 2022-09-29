import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  app.use(cookieParser());

  // app.enableCors({
  //   origin: 'http://localhost:8000',
  //   credentials: true,
  //   // defaultErrorHandler: false,
  //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
  // });
  // app.use(
  //   cors({
  //     origin: true,
  //     credentials: true,
  //     defaultErrorHandler: false,
  //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //   }),
  // );

  await app.listen(process.env.PORT || 9000, function () {
    console.log('Nest server listening on port 9000');
  });
  app.setGlobalPrefix('api');
}

bootstrap();
