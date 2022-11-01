import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { ResumeEntity } from 'src/entity/resume.entity';
import { Resume } from 'src/enterfaces/resume.model';
import { ResumeDto } from 'src/dtos/resume.dto';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(ResumeEntity)
    private resumeRepository: Repository<ResumeEntity>,
  ) {}
  newResume(resume: ResumeEntity): Observable<ResumeEntity> {
    return from(this.resumeRepository.save(resume));
  }

  updateResume(resumedata: ResumeDto, id: number): Promise<Resume> {
    const updatecResume: Resume = {
      id: id,
      ...resumedata,
    };
    updatecResume.id = Number(id);
    const savedResume = this.resumeRepository.save(updatecResume);
    return savedResume;
  }

  public async findAllResume(): Promise<Resume[]> {
    const resume: Resume[] = await this.resumeRepository.find();
    return resume;
  }

  findResumeById(resumeId: number): Observable<ResumeEntity> {
    return from(this.resumeRepository.findOne({ where: { id: resumeId } }));
  }

  deleteResume(id: number): Observable<DeleteResult> {
    return from(this.resumeRepository.delete(id));
  }
}
