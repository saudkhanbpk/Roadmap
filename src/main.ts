import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import cors from 'cors';
import * as Store from 'connect-redis';
import * as session from 'express-session';
import { redis } from './Redis';
import {RedisClient} from 'redis';
async function bootstrap() {
  const RedisStore = Store(session);
  const app = await NestFactory.create(AppModule, { cors: true });






  app.use(cookieParser(), session({
    store: new RedisStore({
      client: redis as any,
    }),
    name: 'qid',
    secret: 'asldkfjalksjdf',
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: false,},
  }));

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
