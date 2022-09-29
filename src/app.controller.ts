import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { Response, Request } from 'express';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
  Delete,
  UnauthorizedException,
  HttpCode,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
// import { DataEntity } from './data.entity';
// import { UserData, UserNewTask } from './data.interface';
import { UpdateResult, DeleteResult } from 'typeorm';
// import { NewTaskEntity } from './newData.entity';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UserData } from './enterfaces/data.model';
import { UserNewTask } from './enterfaces/task.model';
import { NewTaskEntity } from './entity/taske.entity';
import { DataEntity } from './entity/userdata.entity';

@Controller('api')
export class AppController {
  constructor(private appService: AppService, private jwtService: JwtService) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('companyname') companyname: string,
    @Body('password') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.appService.create({
      name,
      email,
      companyname,
      password: hashedPassword,
    });
    delete user.password;
    return { user: user, message: 'Register' };
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.appService.findOne({ where: { email: email } });

    if (!user) {
      throw new BadRequestException('invalid credentials');
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials');
    }
    const jwt = await this.jwtService.signAsync({ id: user.id });
    response.cookie('jwt', jwt, { httpOnly: true });
    return {
      message: 'Login success',
      jwt,
    };
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];

      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }

      const user = await this.appService.findOne({
        where: { id: data['id'] },
      });
      console.log('error :', user);
      const { password, ...result } = user;
      return result;
    } catch (e) {
      console.log('error :', e);
      throw new UnauthorizedException();
    }
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');

    return {
      message: 'success',
    };
  }

  // @Post('user/data')
  // postdate(@Body() userData: UserData): Observable<UserData> {
  //   return this.appService.datePost(userData);
  // }
  // @Post('user/newtask')
  // postnewdate(@Body() userNewTask: UserNewTask): Observable<UserNewTask> {
  //   return this.appService.newdatePost(userNewTask);
  // }

  // @Put('user/newtask/:id')
  // updatetask(
  //   @Body() userNewTask: NewTaskEntity,
  //   @Param('id') id: number,
  // ): Observable<UpdateResult> {
  //   return this.appService.updatenewdatePost(userNewTask, id);
  // }
  // @Put('user/data/:id')
  // update(
  //   @Body() userData: DataEntity,
  //   @Param('id') id: number,
  // ): Observable<UpdateResult> {
  //   return this.appService.updatePost(userData, id);
  // }

  // @Get('user/data')
  // findAll(userdataId: any): Observable<DataEntity[]> {
  //   return this.appService.findAllPosts(userdataId);
  // }

  // @Get('/user/data/:id')
  // @HttpCode(200)
  // async getRoadmapById(
  //   @Req() @Param('id') id: number,
  // ): Promise<Observable<DataEntity>> {
  //   return this.appService.findRoadmapById(id);
  //   // return { data: deleteResponse, message: 'delete object' };
  // }

  // @Get('user/newtask')
  // findAllNew(userNewTaskId: any): Observable<NewTaskEntity[]> {
  //   return this.appService.findAllnewPosts(userNewTaskId);
  // }

  // @Delete('/user/data/:id')
  // // @HttpCode(200)
  // // async deleteRoadMap(@Req() req: RequestWithUser, @Param('id') id: number) {
  // async deleteRoadMap(
  //   @Req() @Param('id') id: number,
  // ): Promise<Observable<DeleteResult>> {
  //   return this.appService.deleteRoadMap(id);
  //   // return { data: deleteResponse, message: 'delete object' };
  // }

  // @Post('images')
  // @UseInterceptors(FilesInterceptor('profile'))
  // postAdd(@UploadedFiles() profilexyz: Array<Express.Multer.File>): object {
  //   console.log(profilexyz);
  //   return {
  //     message: 'file uploaded',
  //   };
  // }
}
