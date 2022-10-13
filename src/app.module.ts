import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { DataController } from './controllers/data.controller';
import { CardsEntity } from './entity/cards.entity';
import { LableEntity } from './entity/lable.entity';
import { TaskEntity } from './entity/taske.entity';
import { UserEntity } from './entity/user.entity';
import { DataEntity } from './entity/userdata.entity';
import { DataService } from './sevices/data.service';

@Module({
  imports: [
    // CloudinaryModule,
    MulterModule.register({
      dest: './images',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database-1.ce6hdwvgho07.ap-northeast-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: '393939Sk',
      database: 'roadmap',
      entities: [UserEntity, DataEntity, CardsEntity, TaskEntity, LableEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      UserEntity,
      DataEntity,
      CardsEntity,
      TaskEntity,
      LableEntity,
    ]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AppController, DataController],
  providers: [AppService, DataService],
})
export class AppModule {}
