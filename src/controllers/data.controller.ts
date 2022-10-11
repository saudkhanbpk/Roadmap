import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { map, Observable, of, switchMap } from 'rxjs';
import { DataEntity } from 'src/entity/userdata.entity';
// import {
//   isFileExtensionSafe,
//   removeFile,
//   saveImageToStorage,
// } from 'src/helpers/image.storage';
import { DataService } from 'src/sevices/data.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('api')
export class DataController {
  constructor(private dataService: DataService) {}

  @Post('user/data')
  create(@Body() userData: DataEntity): Observable<DataEntity> {
    return this.dataService.creatdate(userData);
  }

  @Put('user/data/:id')
  update(
    @Request() req,
    @Body() userData: DataEntity,
    @Param('id') id: number,
  ): Observable<UpdateResult> {
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
  findAll(userData: DataEntity): Observable<DataEntity[]> {
    return this.dataService.findAllPosts(userData);
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
