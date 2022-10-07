import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './controllers/data.controller';
import { UserEntity } from './entity/user.entity';
import { DataEntity } from './entity/userdata.entity';
import { DataService } from './sevices/data.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './images',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database-2.ckqlqhvbkztg.us-east-2.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: '393939Sk',
      database: 'roadmap',
      entities: [UserEntity, DataEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, DataEntity]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AppController, DataController],
  providers: [AppService, DataService],
})
export class AppModule {}
