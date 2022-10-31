import { IsString, IsOptional, IsArray } from 'class-validator';
import { Card } from 'src/enterfaces/card.model';
import { Member } from 'src/enterfaces/member.model';

export class taskDto {
  @IsOptional()
  key: number;

  @IsOptional()
  project: Card;

  @IsString()
  @IsOptional()
  completed: string;

  @IsString()
  @IsOptional()
  id: string;

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
  tasks: Member[];

  /*   @IsOptional()
    name: string; */
}
