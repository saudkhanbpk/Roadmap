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
  Res,
  UseGuards,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from 'src/app.service';
import { UserData } from 'src/enterfaces/data.model';
import { User } from 'src/enterfaces/user.class';
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
    if(id){
      return this.dataService.updatePost(userData, id);
    }else if(!userData.id){
      this.create(userData)
    }
  }

  @Get('user/data')
  findAll(userData: DataEntity): Observable<DataEntity[]> {
    return this.dataService.findAllPosts(userData);
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
}
