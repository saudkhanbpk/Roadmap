import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
  Request,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DataEntity } from 'src/entity/userdata.entity';
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

  @Get('user/alldata')
  findAll(userData: DataEntity): Observable<DataEntity[]> {
    return this.dataService.findAllPosts(userData);
  }

  @Get('user/databy/:id')
  findone(userData: DataEntity): Observable<DataEntity> {
    return this.dataService.findRoadmapById(userData);
  }

  // @Get('user/data/4')
  // findSelected(
  //   @Query('take') take = 1,
  //   @Query('skip') skip = 1,
  // ): Observable<DataEntity[]> {
  //   take = take > 20 ? 20 : take;
  //   return this.dataService.findPosts(take, skip);
  // }

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
}
