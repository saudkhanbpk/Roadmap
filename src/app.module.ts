import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
// import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { DataController } from './controllers/data.controller';
import { CardsEntity } from './entity/cards.entity';
import { LableEntity } from './entity/lable.entity';
import { TaskEntity } from './entity/taske.entity';
import { UserEntity } from './entity/user.entity';
import { DataEntity } from './entity/userdata.entity';
import { DataService } from './sevices/data.service';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MemberEntity } from './entity/members.entity';
import { BoardsEntity } from './entity/board.entity';
import { ResumeController } from './controllers/resume.controller';
import { ResumeService } from './sevices/resume.service';
import { ResumeEntity } from './entity/resume.entity';
import { ContentEntity } from './entity/content.entity';
import { ContentService } from './sevices/content.service';

@Module({
  imports: [
    CloudinaryModule,
    MailerModule.forRoot({
      transport: {
        service: "gmail",
        auth: {
          user: "khannihar921@gmail.com",
          pass: "hpgkjinzqtgguoof"
        },
        tls: {
          rejectUnauthorized: false
        }
      },
      // template: {
      //   dir: join(__dirname, '/view/'),
      //   adapter: new HandlebarsAdapter(),
      // }
    }),
    EventEmitterModule.forRoot(),


    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    // MulterModule.register({
    //   dest: './images',
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database-1.ce6hdwvgho07.ap-northeast-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: '393939Sk',
      database: 'roadmap',
      entities: [
        UserEntity,
        DataEntity,
        CardsEntity,
        TaskEntity,
        LableEntity,
        MemberEntity,
        BoardsEntity,
        ResumeEntity,
        ContentEntity,
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      UserEntity,
      DataEntity,
      CardsEntity,
      TaskEntity,
      LableEntity,
      MemberEntity,
      BoardsEntity,
      ResumeEntity,
      ContentEntity,
    ]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AppController, DataController, ResumeController],
  providers: [AppService, DataService, ResumeService, ContentService],
})
export class AppModule {}
