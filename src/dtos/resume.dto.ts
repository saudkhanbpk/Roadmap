import { IsString, IsOptional } from 'class-validator';
import { Resume } from 'src/enterfaces/resume.model';

export class ResumeDto implements Resume {
  @IsOptional()
  id: number;

  @IsOptional()
  @IsString()
  edu1_desc: string;

  @IsOptional()
  @IsString()
  edu1_qualifiction: string;

  @IsOptional()
  @IsString()
  edu1_school: string;

  @IsOptional()
  @IsString()
  edu1_year: string;

  @IsOptional()
  @IsString()
  edu2_desc: string;

  @IsOptional()
  @IsString()
  edu2_qualifiction: string;

  @IsOptional()
  @IsString()
  edu2_school: string;

  @IsOptional()
  @IsString()
  edu2_year: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  exp1_desc: string;

  @IsOptional()
  @IsString()
  exp1_dur: string;

  @IsOptional()
  @IsString()
  exp1_org: string;

  @IsOptional()
  @IsString()
  exp1_pos: string;

  @IsOptional()
  @IsString()
  exp2_desc: string;

  @IsOptional()
  @IsString()
  exp2_dur: string;

  @IsOptional()
  @IsString()
  exp2_org: string;

  @IsOptional()
  @IsString()
  exp2_pos: string;

  @IsOptional()
  @IsString()
  extra_1: string;

  @IsOptional()
  @IsString()
  extra_2: string;

  @IsOptional()
  @IsString()
  extra_3: string;

  @IsOptional()
  @IsString()
  extra_4: string;

  @IsOptional()
  @IsString()
  extra_5: string;

  @IsOptional()
  @IsString()
  github: string;

  @IsOptional()
  @IsString()
  linkedin: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  proj1_desc: string;

  @IsOptional()
  @IsString()
  proj1_link: string;

  @IsOptional()
  @IsString()
  proj1_title: string;

  @IsOptional()
  @IsString()
  proj2_desc: string;

  @IsOptional()
  @IsString()
  proj2_link: string;

  @IsOptional()
  @IsString()
  proj2_title: string;

  @IsOptional()
  @IsString()
  skills: string;

  @IsOptional()
  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  step: string;
}
