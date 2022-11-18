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
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ResumeDto } from 'src/dtos/resume.dto';
import { Resume } from 'src/enterfaces/resume.model';
import { ResumeEntity } from 'src/entity/resume.entity';
import { ResumeService } from 'src/sevices/resume.service';
import { DeleteResult } from 'typeorm';

@Controller('api')
export class ResumeController {
  constructor(private resumeService: ResumeService) {}

  @Post('resume')
  create(@Body() resume: ResumeEntity) {
    const newdata = this.resumeService.newResume(resume);
    return { data: newdata, message: 'New resume added' };
  }

  @Put('resume/:id')
  update(@Body() resumedata: ResumeDto, @Param('id') id: number) {
    const resumedatas = this.resumeService.updateResume(resumedata, id);
    return { data: resumedatas, message: 'Resume updated' };
  }

  @Get('resume/:id')
  @HttpCode(200)
  async getRoadmapById(
    @Req() @Param('id') id: number,
  ): Promise<Observable<ResumeEntity>> {
    const update = this.resumeService.findResumeById(id);
    if (!id) {
      throw new HttpException('ID not Found. Try another', HttpStatus.CONFLICT);
    }
    return update;
  }

  @Delete('resume/:id')
  async deleteRoadMap(
    @Req() @Param('id') id: number,
  ): Promise<Observable<DeleteResult>> {
    return this.resumeService.deleteResume(id);
  }

  @Get('allresume')
  async findAll() {
    const datas: Resume[] = await this.resumeService.findAllResume();
    return { data: datas, message: 'Get All user Resume' };
  }
}
