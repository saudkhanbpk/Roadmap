import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './controllers/data.controller';
import { NewTaskEntity } from './entity/taske.entity';
import { UserEntity } from './entity/user.entity';
import { DataEntity } from './entity/userdata.entity';
import { DataService } from './sevices/data.service';
// import { DataEntity } from './data.entity';
// import { NewTaskEntity } from './newData.entity';
// import { PositionEntity } from './position.entity';
// import { UserEntity } from './user.entity';

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
      entities: [UserEntity, DataEntity, NewTaskEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, DataEntity, NewTaskEntity]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AppController, DataController],
  providers: [AppService, DataService],
})
export class AppModule {}
