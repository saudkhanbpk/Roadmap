import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Response,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { BoardsDto } from 'src/dtos/boarddto';
import { Board } from 'src/enterfaces/board.model';
import { ContentI } from 'src/enterfaces/content.model';
import { BoardsEntity } from 'src/entity/board.entity';
import { Response as Res } from 'express';
import { ContentEntity } from 'src/entity/content.entity';
import { ContentService } from 'src/sevices/content.service';
// import {
//   isFileExtensionSafe,
//   removeFile,
//   saveImageToStorage,
// } from 'src/helpers/image.storage';
import { DataService } from 'src/sevices/data.service';
import { DeleteResult } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer/dist';
import { AppService } from 'src/app.service';

@Controller('api')
export class DataController {
  constructor(
    private dataService: DataService,
    private contentService: ContentService,
    private mailService: MailerService,
    private appService: AppService,
  ) {}

  @Post('user/data')
  create(@Body() userData: BoardsEntity) {
    // const newdata = this.dataService.createProject(userData);
    // return { data: newdata, message: 'New Data added' };
    return this.dataService.createProject(userData);
  }

  @Put('user/data/:id')
  update(@Body() userData: BoardsDto, @Param('id') id: number) {
    return this.dataService.updatePost(userData, id);
  }

  @Get('/user/data/:id')
  @HttpCode(200)
  async getRoadmapById(
    @Req() @Param('id') id: number,
  ): Promise<Observable<BoardsEntity>> {
    const update = this.dataService.findRoadmapById(id);
    if (!id) {
      throw new HttpException('ID not Found. Try another', HttpStatus.CONFLICT);
    }
    return update;
  }

  @Delete('/user/data/:id')
  // @HttpCode(200)
  // async deleteRoadMap(@Req() req: RequestWithUser, @Param('id') id: number) {
  async deleteRoadMap(
    @Req() @Param('id') id: number,
  ): Promise<Observable<DeleteResult>> {
    return this.dataService.deleteRoadMap(id);
  }

  @Get('user/alldata')
  async findAll() {
    const datas: Board[] = await this.dataService.findAllPosts();
    return { data: datas, message: 'get all user data' };
  }

  @Post('sendEmail')
  async sendEmail(@Body() body: any) {
    const { email } = body;
    await this.mailService.sendMail({
      to: email,
      from: 'imran@gmail',
      subject: 'Testing Nest MailerModule ✔',

    });
    return { message: 'Email sent successfully' };

  }
  @Get('/confirm/:id') // http://localhost:9000/api/confirm/123
  async confirmEmail(@Param('id') id: number, @Response() res: Res) {
    this.appService.confirmEmail(id, res);
  }



  @Post('create/content')
  createContent(@Body() content: ContentEntity) {
    const newdata = this.contentService.createContent(content);
    return { data: newdata, message: 'New Data added' };
  }

  @Get('getAll/content')
  async getAllContent() {
    const datas: ContentI[] = await this.contentService.getAllContent();
    return { data: datas, message: 'get all Contents' };
  }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file', saveImageToStorage))
  // uploadImage(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Request() req,
  // ): Observable<{ modifiedFileName: string } | { error: string }> {
  //   const fileName = file?.filename;

  //   if (!fileName) return of({ error: 'File must be a png, jpg/jpeg' });

  //   const imagesFolderPath = join(process.cwd(), 'images');
  //   const fullImagePath = join(imagesFolderPath + '/' + file.filename);

  //   return isFileExtensionSafe(fullImagePath).pipe(
  //     switchMap((isFileLegit: boolean) => {
  //       if (isFileLegit) {
  //         const userId = req.user.id;
  //         return this.dataService.updateUserImageById(userId, fileName).pipe(
  //           map(() => ({
  //             modifiedFileName: file.filename,
  //           })),
  //         );
  //       }
  //       removeFile(fullImagePath);
  //       return of({ error: 'File content does not match extension!' });
  //     }),
  //   );
  // }
}
