import {Body,Controller,Delete, Get,HttpCode, Param,Post,Put,Req,} from '@nestjs/common';
import { Observable } from 'rxjs';
import { userdataDto } from 'src/dtos/userdatdtos';
import { UserData } from 'src/enterfaces/userdata.model';
import { DataEntity } from 'src/entity/userdata.entity';
// import {
//   isFileExtensionSafe,
//   removeFile,
//   saveImageToStorage,
// } from 'src/helpers/image.storage';
import { DataService } from 'src/sevices/data.service';
import { DeleteResult } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer/dist';

@Controller('api')
export class DataController {
  constructor(private dataService: DataService,private mailService: MailerService) {}

  @Post('user/data')
  create(@Body() userData: DataEntity) {
    const newdata = this.dataService.creatdate(userData);
    return { data: newdata, message: 'New Data added' };
  }

  @Put('user/data/:id')
  update(@Body() userData: userdataDto, @Param('id') id: number) {
    return this.dataService.updatePost(userData, id);
  }

  @Get('/user/data/:id')
  @HttpCode(200)
  async getRoadmapById(
    @Req() @Param('id') id: number,
  ): Promise<Observable<DataEntity>> {
    return this.dataService.findRoadmapById(id);
    // return { data: deleteResponse, message: 'delete object' };
  }

  @Delete('/user/data/:id')
  // @HttpCode(200)
  // async deleteRoadMap(@Req() req: RequestWithUser, @Param('id') id: number) {
  async deleteRoadMap(
    @Req() @Param('id') id: number,
  ): Promise<Observable<DeleteResult>> {
    return this.dataService.deleteRoadMap(id);
    // return { data: deleteResponse, message: 'delete object' };
  }

  @Get('user/alldata')
  async findAll() {
    const datas: UserData[] = await this.dataService.findAllPosts();
    return { data: datas, message: 'get all user data' };
    // return this.dataService.findAllPosts(userData);
  }

  @Post('send-email')
  async sendEmail(@Body() body: any) {
    const { email, subject, message } = body;
    await this.mailService.sendMail({
      to: email,
      from: 'khan@gmail.com',
      subject: subject,
      text: message,
      html: `<b>${message}</b>`,
    });
    return { message: 'Email sent successfully' };
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
