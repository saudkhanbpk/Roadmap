import { IsString, IsOptional, IsArray } from 'class-validator';
import { Card } from 'src/enterfaces/card.model';
import { Member } from 'src/enterfaces/member.model';

export class taskDto {
  @IsOptional()
  id: number;

  @IsOptional()
  project: Card;

  @IsString()
  @IsOptional()
  completed: string;

  @IsString()
  @IsOptional()
  ik: string;

  @IsString()
  @IsOptional()
  text: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  deadline: string;

  @IsString()
  @IsOptional()
  created_by: string;

  @IsString()
  @IsOptional()
  @IsArray()
  comments: string[];

  @IsOptional()
  @IsArray()
  task: Member[];

  /*   @IsOptional()
    name: string; */
}
